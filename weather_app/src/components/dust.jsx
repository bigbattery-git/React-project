import { useEffect } from "react";
const {kakao} = window;

function Dust(props){

	useEffect(function(){

		kakao.maps.load(()=>{
			var container = document.getElementById('map'),
				options = {
						center: new kakao.maps.LatLng(33.450701, 126.570667),
						level: 3
				};
		
			var map = new kakao.maps.Map(container, options);
		})

	},[]);

	return(
		<>
			<div id="map" style={{width :'500px', height:'400px'}}></div>
		</>
	);
}

export default Dust;