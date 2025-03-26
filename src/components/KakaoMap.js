import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    // 카카오맵이 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById('kakao-map');
      const options = {
        center: new window.kakao.maps.LatLng(37.5666805, 126.9784147), // 서울 시청 좌표 (실제 회사 위치로 변경하세요)
        level: 3,
      };

      // 지도 생성
      const map = new window.kakao.maps.Map(container, options);
      
      // 마커 생성
      const markerPosition = new window.kakao.maps.LatLng(37.5666805, 126.9784147);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        map: map
      });

      // 인포윈도우 생성
      const infowindow = new window.kakao.maps.InfoWindow({
        content: '<div style="padding:5px;font-size:12px;width:150px;text-align:center;">아우라웍스<br><a href="https://map.kakao.com/link/to/아우라웍스,37.5666805,126.9784147" style="color:blue" target="_blank">길찾기</a></div>'
      });
      
      // 인포윈도우 표시
      infowindow.open(map, marker);

      // 지도 크기 변경 시 중심 재설정
      const resizeMap = () => {
        map.setCenter(markerPosition);
      };

      window.addEventListener('resize', resizeMap);
      return () => {
        window.removeEventListener('resize', resizeMap);
      };
    }
  }, []);

  return (
    <div 
      id="kakao-map" 
      style={{ 
        width: '100%', 
        height: '350px',
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    ></div>
  );
};

export default KakaoMap; 