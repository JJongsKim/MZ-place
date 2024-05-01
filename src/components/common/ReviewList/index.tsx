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
import { useDeleteReviews, useEditReviews, usePostReviews } from '@hooks/api/reviews';
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

  const { toast, handleFloatingToast } = useToast();
  const { modal, handleViewModal, handleCloseModal } = useModal();

  // 토스트용 상태값
  const [nonLoginToast, setNonLoginToast] = useState(false);
  const [alreadyReviewToast, setAlreadyReviewToast] = useState(false);
  const [editToast, setEditToast] = useState(false);
  const [emptyContent, setEmptyContent] = useState(false);

  const [postReview, setPostReview] = useState(false); // 리뷰 쓰는창 state
  const [clicked, isClicked] = useState(false); // 드롭다운
  const [rating, setRating] = useState(5); // 별점 선택
  const [ratingContent, setRatingContent] = useState(''); // 리뷰 작성란

  const [editReview, setEditReview] = useState(false); // 리뷰 수정창 state

  const handleClickEditBtn = (rating: number, content: string) => {
    setEditReview(!editReview);
    setPostReview(false);
    setRating(rating);
    setRatingContent(content);
  };

  const handleCloseEditBtn = () => {
    setEditReview(false);
    setRating(5);
    setRatingContent('');
  };

  const handleClickDropdown = () => {
    isClicked(!clicked);
  };

  const handleClickRatingStar = (rating: number) => {
    setRating(rating);
    isClicked(false);
  };

  // 리뷰 삭제
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

  // 리뷰 등록
  const { mutate: postReviewsMutation } = usePostReviews();
  const handlePost = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId && Object.values(userId).length === 0) {
      setNonLoginToast(true);
    } else if (reviewData?.some(item => item.user === userNickname)) {
      setAlreadyReviewToast(true);
    } else {
      if (ratingContent.length < 5) {
        setEmptyContent(true);
      } else {
        if (placeType === 'place') {
          postReviewsMutation({
            args: {
              place_id: placeNum,
              rating: rating,
              content: ratingContent,
            },
            headerArgs: userId,
          });
        }
        if (placeType === 'course') {
          postReviewsMutation({
            args: {
              course_id: placeNum,
              rating: rating,
              content: ratingContent,
            },
            headerArgs: userId,
          });
        }

        setPostReview(false);
        setRating(5);
        setRatingContent('');
      }
    }
  };

  // 리뷰 수정
  const { mutate: editReviewsMutation } = useEditReviews();
  const handleEdit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ratingContent.length < 5) {
      setEmptyContent(true);
    } else {
      if (placeType === 'place') {
        editReviewsMutation({
          args: {
            place_id: placeNum,
            rating: rating,
            content: ratingContent,
          },
          headerArgs: userId,
        });
      }
      if (placeType === 'course') {
        editReviewsMutation({
          args: {
            course_id: placeNum,
            rating: rating,
            content: ratingContent,
          },
          headerArgs: userId,
        });
      }

      setEditReview(false);
    }
  };

  useEffect(() => {
    if (nonLoginToast) {
      setTimeout(() => {
        setNonLoginToast(false);
      }, 2000);
    }
  }, [nonLoginToast]);

  useEffect(() => {
    if (alreadyReviewToast) {
      setTimeout(() => {
        setAlreadyReviewToast(false);
      }, 2000);
    }
  }, [alreadyReviewToast]);

  useEffect(() => {
    if (editToast) {
      setTimeout(() => {
        setEditToast(false);
      }, 2000);
    }
  }, [editToast]);

  useEffect(() => {
    if (emptyContent) {
      setTimeout(() => {
        setEmptyContent(false);
      }, 2000);
    }
  }, [emptyContent]);

  return (
    <S.ReviewWrap>
      <S.ReviewHeader>
        <S.ReviewSummary>
          <img src={FullStar} />
          {reviewData && reviewData.length === 0 ? <p>0.00</p> : <p>{reviewAvg}</p>}
          {reviewData && reviewData.length === 0 ? <p>0개</p> : <p>{reviewData?.length}개</p>}
        </S.ReviewSummary>
        <button
          onClick={() => {
            setPostReview(true);
            setEditReview(false);
            setRating(5);
          }}
        >
          리뷰 쓰기
        </button>
      </S.ReviewHeader>

      {/* 리뷰 작성 POST */}
      {postReview && (
        <S.ReviewPostWrap onSubmit={handlePost}>
          <S.ReviewPostHeader>
            <S.ReviewPostDropdown>
              <S.ReviewPostDropdownText>
                {Array.from({ length: rating }, (_, index) => (
                  <img key={index} src={FullStar} height="15" />
                ))}
              </S.ReviewPostDropdownText>
              <S.ReviewPostDropdownBtnWrap onClick={handleClickDropdown}>
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

      {/* 리뷰 조회 | 수정 | 삭제 */}
      <ul style={{ width: '100%' }}>
        {reviewData && reviewData.length !== 0 ? (
          <>
            {reviewData?.map(review => (
              <S.ReviewList key={review.id}>
                {/* 리뷰 수정 - editReview(true) & 본인 리뷰 */}
                {editReview && review.user === userNickname ? (
                  <S.EditForm onSubmit={handleEdit}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '5px',
                      }}
                    >
                      <p style={{ marginRight: '6px' }}>{review.user}</p>
                      <S.ReviewPostDropdown>
                        <S.ReviewPostDropdownText>
                          {Array.from({ length: rating }, (_, index) => (
                            <img key={index} src={FullStar} height="15" />
                          ))}
                        </S.ReviewPostDropdownText>
                        <S.ReviewPostDropdownBtnWrap onClick={handleClickDropdown}>
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
                      <S.ReviewListEditWrap>
                        <button type="submit">재등록</button>
                        <button onClick={handleCloseEditBtn}>닫기</button>
                      </S.ReviewListEditWrap>
                    </div>
                    <S.ReviewPostContent
                      id="reviewContent"
                      name="reviewContent"
                      onChange={e => setRatingContent(e.target.value)}
                      defaultValue={review.content}
                    />
                  </S.EditForm>
                ) : (
                  <>
                    {/* 리뷰 조회 */}
                    <S.ReviewUserInfo>
                      <p style={{ marginRight: '6px' }}>{review.user}</p>
                      {Array.from({ length: review.rating }, (_, index) => (
                        <img key={index} src={FullStar} height="15" />
                      ))}
                      {Array.from({ length: 5 - review.rating }, (_, index) => (
                        <img key={index} src={EmptyStar} height="15" />
                      ))}
                    </S.ReviewUserInfo>
                    <S.ReviewContent>{review.content}</S.ReviewContent>
                  </>
                )}

                {review.user === userNickname && !editReview && (
                  <S.ReviewListEditWrap>
                    <button onClick={() => handleClickEditBtn(review.rating, review.content)}>
                      수정
                    </button>
                    <button onClick={handleViewModal}>삭제</button>
                  </S.ReviewListEditWrap>
                )}
              </S.ReviewList>
            ))}
          </>
        ) : (
          // 리뷰 0개인 경우
          <S.NonReviewWrap>아직 리뷰가 없어요 🤔</S.NonReviewWrap>
        )}
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
      {nonLoginToast && <Toast>로그인 후 이용해주세요!</Toast>}
      {alreadyReviewToast && <Toast>이미 작성한 리뷰가 있어요!</Toast>}
      {editToast && <Toast>리뷰를 수정했어요!</Toast>}
      {emptyContent && <Toast>리뷰는 5자 이상 작성해주세요!</Toast>}
    </S.ReviewWrap>
  );
};

export default ReviewList;
