import React, { useState, useEffect } from "react";

import axios from "axios";

/*import {
  // Button,
  Container,
  Row,
  Col,
  Media,
} from "reactstrap";*/

const getPageContentUrl = "http://localhost/admin/api/get-page";
//const getPageContentUrl = "http://my-demo.xyz/visa/api/get-page";

function HomeContent() {
	const [pageContent, setPageContentData] = useState('content');

	const getPageContentWithAxios = async () => {
		const res = await axios.get(getPageContentUrl,{ params: { page: 'home' }});
		//console.log(response);
		const pageContent = res.data.content;
		setPageContentData(pageContent);
		//console.log(pageContent);
	};

	useEffect(() => {
		getPageContentWithAxios();
	}, []);
	
	return (
    <>
		<div className="section section-step" dangerouslySetInnerHTML={{ __html: pageContent[0].content }}></div>

    </>
  );
}

export default HomeContent;

