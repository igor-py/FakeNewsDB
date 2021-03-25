import FakeNews from "./components/FakeNews";
import React, { useEffect, useState } from "react";

function App() {
	const [fakeNewsList, setFakeNewsList] = useState([
		{
			title: "Uso de Cloroquina funciona",
			link:
				"https://cursos.alura.com.br/forum/topico-error-element-type-is-invalid-expected-a-string-112726",
			proof:
				"https://www.google.com/search?q=contra-prova+traducao&sxsrf=ALeKk029ogZgE0Tt923VUUSVzY5IwvRfDw%3A1616712660329&ei=1BNdYNXHE_C75OUPm7e6-AQ&oq=contra-prova+traducao&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIIxDqAhAnOgkIIxDqAhAnEBM6BAgjECc6BAgAEEM6CggAELEDEIMBEEM6CAguELEDEIMBOgUIABCxAzoLCAAQsQMQxwEQowI6BggjECcQEzoICAAQsQMQgwE6AggAOgIILjoECC4QQzoOCAAQsQMQgwEQxwEQrwE6CAguELEDEJMCOgcIABCxAxAKOgQIABAKOggIABDHARCvAToFCC4QsQM6BAgAEB46BggAEAoQHjoGCAAQFhAeOgcIIRAKEKABULjgIVjEjiJg1pAiaAJwAHgCgAHaAogB8CeSAQgwLjIwLjUuMZgBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjVgcr-w8zvAhXwHbkGHZubDk8Q4dUDCA0&uact=5",
		},
		{
			title: "Uso de Cloroquina funciona",
			link:
				"https://cursos.alura.com.br/forum/topico-error-element-type-is-invalid-expected-a-string-112726",
			proof:
				"https://www.google.com/search?q=contra-prova+traducao&sxsrf=ALeKk029ogZgE0Tt923VUUSVzY5IwvRfDw%3A1616712660329&ei=1BNdYNXHE_C75OUPm7e6-AQ&oq=contra-prova+traducao&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIIxDqAhAnOgkIIxDqAhAnEBM6BAgjECc6BAgAEEM6CggAELEDEIMBEEM6CAguELEDEIMBOgUIABCxAzoLCAAQsQMQxwEQowI6BggjECcQEzoICAAQsQMQgwE6AggAOgIILjoECC4QQzoOCAAQsQMQgwEQxwEQrwE6CAguELEDEJMCOgcIABCxAxAKOgQIABAKOggIABDHARCvAToFCC4QsQM6BAgAEB46BggAEAoQHjoGCAAQFhAeOgcIIRAKEKABULjgIVjEjiJg1pAiaAJwAHgCgAHaAogB8CeSAQgwLjIwLjUuMZgBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjVgcr-w8zvAhXwHbkGHZubDk8Q4dUDCA0&uact=5",
		},
		{
			title: "Uso de Cloroquina funciona",
			link:
				"https://cursos.alura.com.br/forum/topico-error-element-type-is-invalid-expected-a-string-112726",
			proof:
				"https://www.google.com/search?q=contra-prova+traducao&sxsrf=ALeKk029ogZgE0Tt923VUUSVzY5IwvRfDw%3A1616712660329&ei=1BNdYNXHE_C75OUPm7e6-AQ&oq=contra-prova+traducao&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIIxDqAhAnOgkIIxDqAhAnEBM6BAgjECc6BAgAEEM6CggAELEDEIMBEEM6CAguELEDEIMBOgUIABCxAzoLCAAQsQMQxwEQowI6BggjECcQEzoICAAQsQMQgwE6AggAOgIILjoECC4QQzoOCAAQsQMQgwEQxwEQrwE6CAguELEDEJMCOgcIABCxAxAKOgQIABAKOggIABDHARCvAToFCC4QsQM6BAgAEB46BggAEAoQHjoGCAAQFhAeOgcIIRAKEKABULjgIVjEjiJg1pAiaAJwAHgCgAHaAogB8CeSAQgwLjIwLjUuMZgBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjVgcr-w8zvAhXwHbkGHZubDk8Q4dUDCA0&uact=5",
		},
	]);

	return (
		<>
			<FakeNews fakeNewsList={fakeNewsList} />
		</>
	);
}

export default App;
