import FakeNews from "./components/FakeNews";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
	const [fakeNewsList, setFakeNewsList] = useState([
		{
			id: 0,
			title: "Uso de Cloroquina funciona",
			link:
				"https://cursos.alura.com.br/forum/topico-error-element-type-is-invalid-expected-a-string-112726",
			proof:
				"https://www.google.com/search?q=contra-prova+traducao&sxsrf=ALeKk029ogZgE0Tt923VUUSVzY5IwvRfDw%3A1616712660329&ei=1BNdYNXHE_C75OUPm7e6-AQ&oq=contra-prova+traducao&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIIxDqAhAnOgkIIxDqAhAnEBM6BAgjECc6BAgAEEM6CggAELEDEIMBEEM6CAguELEDEIMBOgUIABCxAzoLCAAQsQMQxwEQowI6BggjECcQEzoICAAQsQMQgwE6AggAOgIILjoECC4QQzoOCAAQsQMQgwEQxwEQrwE6CAguELEDEJMCOgcIABCxAxAKOgQIABAKOggIABDHARCvAToFCC4QsQM6BAgAEB46BggAEAoQHjoGCAAQFhAeOgcIIRAKEKABULjgIVjEjiJg1pAiaAJwAHgCgAHaAogB8CeSAQgwLjIwLjUuMZgBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjVgcr-w8zvAhXwHbkGHZubDk8Q4dUDCA0&uact=5",
			ups: 0,
			downs: 0,
		},
		{
			id: 1,
			title: "Uso de Cloroquina funciona",
			link:
				"https://cursos.alura.com.br/forum/topico-error-element-type-is-invalid-expected-a-string-112726",
			proof:
				"https://www.google.com/search?q=contra-prova+traducao&sxsrf=ALeKk029ogZgE0Tt923VUUSVzY5IwvRfDw%3A1616712660329&ei=1BNdYNXHE_C75OUPm7e6-AQ&oq=contra-prova+traducao&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIIxDqAhAnOgkIIxDqAhAnEBM6BAgjECc6BAgAEEM6CggAELEDEIMBEEM6CAguELEDEIMBOgUIABCxAzoLCAAQsQMQxwEQowI6BggjECcQEzoICAAQsQMQgwE6AggAOgIILjoECC4QQzoOCAAQsQMQgwEQxwEQrwE6CAguELEDEJMCOgcIABCxAxAKOgQIABAKOggIABDHARCvAToFCC4QsQM6BAgAEB46BggAEAoQHjoGCAAQFhAeOgcIIRAKEKABULjgIVjEjiJg1pAiaAJwAHgCgAHaAogB8CeSAQgwLjIwLjUuMZgBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjVgcr-w8zvAhXwHbkGHZubDk8Q4dUDCA0&uact=5",
			ups: 0,
			downs: 0,
		},
		{
			id: 2,
			title: "Uso de Cloroquina funciona",
			link:
				"https://cursos.alura.com.br/forum/topico-error-element-type-is-invalid-expected-a-string-112726",
			proof:
				"https://www.google.com/search?q=contra-prova+traducao&sxsrf=ALeKk029ogZgE0Tt923VUUSVzY5IwvRfDw%3A1616712660329&ei=1BNdYNXHE_C75OUPm7e6-AQ&oq=contra-prova+traducao&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIIxDqAhAnOgkIIxDqAhAnEBM6BAgjECc6BAgAEEM6CggAELEDEIMBEEM6CAguELEDEIMBOgUIABCxAzoLCAAQsQMQxwEQowI6BggjECcQEzoICAAQsQMQgwE6AggAOgIILjoECC4QQzoOCAAQsQMQgwEQxwEQrwE6CAguELEDEJMCOgcIABCxAxAKOgQIABAKOggIABDHARCvAToFCC4QsQM6BAgAEB46BggAEAoQHjoGCAAQFhAeOgcIIRAKEKABULjgIVjEjiJg1pAiaAJwAHgCgAHaAogB8CeSAQgwLjIwLjUuMZgBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjVgcr-w8zvAhXwHbkGHZubDk8Q4dUDCA0&uact=5",
			ups: 0,
			downs: 0,
		},
	]);

	const setVote = (id, vote) => {
		setFakeNewsList(
			fakeNewsList.map((fakeNews) => {
				if (fakeNews.id === id) {
					if (vote > 0) {
						fakeNews.ups += vote;
					} else {
						fakeNews.downs += -1 * vote;
					}
				}
				return fakeNews;
			})
		);
	};

	const setNewFakeNews = (e) => {
		console.log(e);
	};

	return (
		<>
			<h1 className="mx-auto my-6 text-center font-bold text-3xl">
				Fake News DB
			</h1>
			<FakeNews fakeNewsList={fakeNewsList} onVote={setVote} />
			<Form onFormSubmit={setNewFakeNews} currentSize={fakeNewsList.length} />
		</>
	);
}

export default App;
