/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './style';
import * as MP from '@pages/MyPage/style';

import FullStar from '@assets/star-full.svg';
import EmptyStar from '@assets/star-empty.svg';
import activeBtn from '@assets/dropdown.svg';

import Toast from '../Toast';
import Modal from '../Modal';

import { RatingStarArr } from '@application/constant';
import { getNickname } from '@infra/api/nickname';
import { useEffect, useState } from 'react';
import { useDeleteReviews, usePostReviews } from '@hooks/api/reviews';
import useToast from '@hooks/useToast';
import useModal from '@hooks/useModal';

interface ReviewListProps {
  placeNum: number; // 장소 및 코스 id
  placeType?: 'place' | 'course';
  userId: Record<string, string>;
  reviewData: ReviewDataType[] | undefined;
}

const ReviewList = ({ reviewData, placeNum, placeType, userId }: ReviewListProps) => {
  const userNickname = getNickname();
  const reviewAvg =
    reviewData &&
    (reviewData.reduce((acc, cur) => acc + cur.rating, 0) / reviewData.length).toFixed(2);

  console.log(reviewData);

  const { toast, handleFloatingToast } = useToast();
  const { modal, handleViewModal, handleCloseModal } = useModal();

  const [nonLogin, setNonLogin] = useState(false);
  const [alreadyReview, setAlreadyReview] = useState(false);

  const [postReview, setPostReview] = useState(false); // 리뷰 쓰는창 state
  const [clicked, isClicked] = useState(false); // 드롭다운
  const [rating, setRating] = useState(5); // 별점 선택
  const [ratingContent, setRatingContent] = useState(''); // 리뷰 작성란

  const handleClickBtn = () => {
    isClicked(!clicked);
  };

  const handleClickRatingStar = (rating: number) => {
    setRating(rating);
    isClicked(false);
  };

  const { mutate: deleteReviewsMutation } = useDeleteReviews();
  const handleDeleteReview = () => {
    if (placeType === 'place') {
      deleteReviewsMutation({
        args: {
          place_id: placeNum,
        },
        headerArgs: userId,
      });
    }
    if (placeType === 'course') {
      deleteReviewsMutation({
        args: {
          course_id: placeNum,
        },
        headerArgs: userId,
      });
    }

    handleCloseModal();
    handleFloatingToast();
  };

  const { mutate: postReviewsMutation } = usePostReviews();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId && Object.values(userId).length === 0) {
      setNonLogin(true);
    } else if (reviewData?.some(item => item.user === userNickname)) {
      setAlreadyReview(true);
    } else {
      postReviewsMutation({
        args: {
          place_id: placeNum,
          rating: rating,
          content: ratingContent,
        },
        headerArgs: userId,
      });

      setPostReview(false);
      setRating(5);
      setRatingContent('');
    }
  };

  useEffect(() => {
    if (nonLogin) {
      setTimeout(() => {
        setNonLogin(false);
      }, 2000);
    }
  }, [nonLogin]);

  useEffect(() => {
    if (alreadyReview) {
      setTimeout(() => {
        setAlreadyReview(false);
      }, 2000);
    }
  }, [alreadyReview]);

  return (
    <S.ReviewWrap>
      <S.ReviewHeader>
        <S.ReviewSummary>
          <img src={FullStar} />
          <p>{reviewAvg}</p>
          <p>{reviewData?.length}개</p>
        </S.ReviewSummary>
        <button onClick={() => setPostReview(true)}>리뷰 쓰기</button>
      </S.ReviewHeader>

      {postReview && (
        <S.ReviewPostWrap onSubmit={handleSubmit}>
          <S.ReviewPostHeader>
            <S.ReviewPostDropdown>
              <S.ReviewPostDropdownText>
                {Array.from({ length: rating }, (_, index) => (
                  <img key={index} src={FullStar} height="15" />
                ))}
              </S.ReviewPostDropdownText>
              <S.ReviewPostDropdownBtnWrap onClick={handleClickBtn}>
                <S.ReviewPostDropdownBtn src={activeBtn} $clicked={clicked} />
              </S.ReviewPostDropdownBtnWrap>
              {clicked && (
                <S.ReviewPostDropdownListWrap>
                  <S.ReviewPostDropdownList>
                    {RatingStarArr.map(item => (
                      <li key={item.rating}>
                        {Array.from({ length: item.rating }, (_, index) => (
                          <img
                            key={index}
                            src={FullStar}
                            height="15"
                            onClick={() => handleClickRatingStar(item.rating)}
                          />
                        ))}
                      </li>
                    ))}
                  </S.ReviewPostDropdownList>
                </S.ReviewPostDropdownListWrap>
              )}
            </S.ReviewPostDropdown>
            <button onClick={() => setPostReview(false)}>닫기</button>
          </S.ReviewPostHeader>
          <S.ReviewPostContent
            id="reviewContent"
            name="reviewContent"
            onChange={e => setRatingContent(e.target.value)}
          />
          <S.ReviewPostButtonWrap>
            <button type="submit">등록</button>
          </S.ReviewPostButtonWrap>
        </S.ReviewPostWrap>
      )}

      <ul style={{ width: '100%' }}>
        {reviewData?.map(review => (
          <S.ReviewList key={review.id}>
            <S.ReviewUserInfo>
              <p>{review.user}</p>
              {Array.from({ length: review.rating }, (_, index) => (
                <img key={index} src={FullStar} height="15" />
              ))}
              {Array.from({ length: 5 - review.rating }, (_, index) => (
                <img key={index} src={EmptyStar} height="15" />
              ))}
            </S.ReviewUserInfo>
            <S.ReviewContent>{review.content}</S.ReviewContent>

            {review.user === userNickname && (
              <S.ReviewListEditWrap>
                <button>수정</button>
                <button onClick={handleViewModal}>삭제</button>
              </S.ReviewListEditWrap>
            )}
          </S.ReviewList>
        ))}
      </ul>
      {modal && (
        <Modal onClose={handleCloseModal}>
          <MP.ModalBox>
            <MP.WithdrawText>정말로 삭제하시겠어요?</MP.WithdrawText>
            <MP.SelectBoxWrap>
              <MP.SelectBox onClick={handleCloseModal}>아니오</MP.SelectBox>
              <MP.SelectBox onClick={handleDeleteReview}>예</MP.SelectBox>
            </MP.SelectBoxWrap>
          </MP.ModalBox>
        </Modal>
      )}
      {toast && <Toast>리뷰가 삭제되었습니다.</Toast>}
      {nonLogin && <Toast>로그인 후 이용해주세요!</Toast>}
      {alreadyReview && <Toast>이미 작성한 리뷰가 있어요!</Toast>}
    </S.ReviewWrap>
  );
};

export default ReviewList;
