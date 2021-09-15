import React, { useState } from 'react';
import axios from 'axios';

function AxiosApi() {
    
  // photos, setPhotos 비구조화 할당
  let [photos, setPhotos]  = useState<any[]>([]);

  // 통신 메서드
  function searchApi() {
      const url = "https://localhos:3300/post/showAll";
      axios.get(url)
      .then(function(response) {
          setPhotos(response.data);
          console.log("성공");
      })
      .catch(function(error) {
          console.log("실패");
      })
      
  }

  // 조회 데이터 존재할 경우
  if(photos.length > 0) {
      return (
          photos.map(photo => (
              
                  <div key={photo.author}>
                      <p>content : {photo.content}</p>
                  </div>)
          )
      );
  } else { // 조회 데이터 존재하지 않을 경우
      return (
          <div>
              <button onClick={searchApi}> 불러오기 </button>
          </div>
      )
  }
}
export default AxiosApi;