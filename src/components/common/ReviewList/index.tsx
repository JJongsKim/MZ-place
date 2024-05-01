import * as S from './style';

import FullStar from '@assets/star-full.svg';
import activeBtn from '@assets/dropdown.svg';

import { RatingStarArr } from '@application/constant';
import { getNickname } from '@infra/api/nickname';
import { useState } from 'react';
import { usePostReviews } from '@hooks/api/reviews';

interface ReviewListProps {
  placeNum: number; // 장소 및 코스 id
  userId: Record<string, string>;
  reviewData: ReviewDataType[] | undefined;
}

const ReviewList = ({ reviewData, placeNum, userId }: ReviewListProps) => {
  const userNickname = getNickname();

  const reviewAvg =
    reviewData &&
    (reviewData.reduce((acc, cur) => acc + cur.rating, 0) / reviewData.length).toFixed(2);

  const [clicked, isClicked] = useState(false);
  const [postReview, setPostReview] = useState(false); // 리뷰 쓰기
  const [rating, setRating] = useState(5);
  const [ratingContent, setRatingContent] = useState('');

  const handleClickBtn = () => {
    isClicked(!clicked);
  };

  const handleClickRatingStar = (rating: number) => {
    setRating(rating);
    isClicked(false);
  };

  const { mutate: postReviewsMutation } = usePostReviews();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    postReviewsMutation({
      args: {
        place_id: placeNum,
        rating: rating,
        content: ratingContent,
      },
      headerArgs: userId,
    });
  };

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
            </S.ReviewUserInfo>
            <S.ReviewContent>{review.content}</S.ReviewContent>

            {review.user === userNickname && (
              <S.ReviewListEditWrap>
                <button>수정</button>
                <button>삭제</button>
              </S.ReviewListEditWrap>
            )}
          </S.ReviewList>
        ))}
      </ul>
    </S.ReviewWrap>
  );
};

export default ReviewList;
