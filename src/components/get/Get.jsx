import React, { useEffect, useState } from "react";
import "./Get.css";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const Get = () => {
	const [users, setUsers] = useState([]);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		const localinput = JSON.parse(localStorage.getItem("input"));
		if (localinput) {
			setInputValue(localinput);
		}
	}, []);
	useEffect(() => {
		console.log(`${inputValue.length} ${inputValue}`);
		localStorage.setItem("input", JSON.stringify(inputValue));
	}, [inputValue]);

	const fetchData = async () => {
		try {
			const storedUsers = JSON.parse(localStorage.getItem("users"));
			if (storedUsers) {
				setUsers(storedUsers);
			}
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users`
			);
			const responseData = await response.json();
			setUsers([...responseData]);
			localStorage.setItem("users", JSON.stringify(responseData));
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const deleteUsers = () => {
		setUsers([]);
	};

	return (
		<>
		

				<div className="buttons">
				<Input
					value={inputValue}
					placeholder="text"
					onChange={(e) => setInputValue(e.target.value)}
					className="input"
				/>
				{/* <Button className='add'>add</Button> */}
					<Button className="addButton" onClick={fetchData}>
						Получить пользователей{" "}
					</Button>
					<Button className="deleteButton" onClick={deleteUsers}>
						Удалить пользователей
					</Button>
				</div>
				<div className="cards">
			{users.map((item) => (
					<div className="card" key={item.id}>
						<h2>name: {item.name}</h2>
						<p>email: {item.email}</p>
						<p>phone: {item.phone}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Get;
