import React from 'react';
import {Container} from "./ErrorPage.styles.ts";
import img from "../../assets/errorImg.png";
import {ButtonFill} from "../../styles/styles.tsx";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="error__img">
                <img src={img} alt={"pageNotFound"}/>
            </div>
            <div className="error__text">
                <h1>404</h1>
                <div>Error Founded</div>
                <ButtonFill onClick={() => {navigate('/')}}>
                    <span>Back to  main page</span>
                </ButtonFill>
            </div>
        </Container>
    );
};

export default ErrorPage;