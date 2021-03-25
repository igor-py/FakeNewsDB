const LinkNews = ({ link }) => {
	let isLink = true;

	return (
		<>
			<h1>{isLink ? "Link" : "Txt"}</h1>
			<a href="{link}" className="underline text-red-500">
				{link}
			</a>
		</>
	);
};

export default LinkNews;
