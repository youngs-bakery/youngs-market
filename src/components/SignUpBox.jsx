import React, { useState } from "react";
import styled from "styled-components";

const SignUpBox = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<>
			<TabContainer>
				<Tab active={activeTab === 0} onClick={() => handleTabClick(0)}>
					구매회원가입
				</Tab>
				<Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>
					판매회원가입
				</Tab>
			</TabContainer>
			<SignUpContainer>
				<FormContainer>
					{activeTab === 0 ? (
						<Form action="/login" method="post">
							<p>아이디</p>
							<Input
								type="email"
								id="buyer-email"
								name="buyer-email"
								placeholder=""
								required
							/>
							<p>비밀번호</p>
							<Input
								type="password"
								id="buyer-password"
								name="buyer-password"
								placeholder=""
								required
							/>
							<p>비밀번호 재확인</p>
							<Input
								type="password"
								id="buyer-password"
								name="buyer-password"
								placeholder=""
								required
							/>
							<p>이름</p>
							<Input
								type="text"
								id="buyer-name"
								name="buyer-name"
								placeholder=""
								required
							/>
						</Form>
					) : (
						<Form action="/login" method="post">
							<Input
								type="email"
								id="seller-email"
								name="seller-email"
								placeholder="아이디"
								required
							/>
							<Input
								type="password"
								id="seller-password"
								name="seller-password"
								placeholder="비밀번호"
								required
							/>
						</Form>
					)}
				</FormContainer>
			</SignUpContainer>
		</>
	);
};

const SignUpContainer = styled.div`
	margin: 0 auto;
	/* margin-top: -7px; */
	padding-top: 40px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 550px;
	border-radius: 0px 0px 10px 10px;
	border: 1px solid var(--color-orange);
	border-top: 0px;
	overflow: hidden;
	position: relative;
	z-index: 0;
`;

const TabContainer = styled.div`
	display: flex;
	/* overflow: hidden; */
	width: 550px;
	margin: 0 auto;
`;
const Tab = styled.div`
	width: 50%;
	border-top: 1px solid var(--color-orange);
	border-left: 1px solid var(--color-orange);
	border-right: 1px solid var(--color-orange);
	border-bottom: ${(props) => (props.active ? "null" : "1px solid #EC7E62")};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 20px 82px 38px 82px;
	height: 60px;
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	background-color: ${(props) => (props.active ? "white" : "#EDD0C2")};
	/* z-index: ${(props) => (props.active ? "10" : "0")}; */
	&:last-child {
		margin-right: 0;
	}
`;

const FormContainer = styled.div`
	padding-left: 35px;
	padding-right: 35px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;

	p {
		margin-bottom: 10px;
		font-size: 16px;
		color: var(--color-darkgrey);
	}
	p:nth-child(7) {
		margin-top: 38px;
	}
`;

const Input = styled.input`
	width: 480px;
	height: 54px;
	border: solid 1px var(--color-orange);
	border-radius: 5px;
	margin-bottom: 12px;
`;

const Button = styled.button`
	background-color: var(--color-maroon);
	width: 480px;
	height: 60px;
	border-radius: 10px;
	font-size: 18px;
	color: white;
	margin-top: 30px;
	margin-bottom: 36px;
	font-weight: 700;
`;

export default SignUpBox;
