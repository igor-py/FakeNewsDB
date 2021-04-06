import LinkNews from "./LinkNews";

const FakeNews = ({ fakeNewsList, onVote }) => {
	return (
		<>
			{fakeNewsList.map((fakeNew) => {
				return (
					<div className="main-div">
						<div className="border-2 mx-2 m-2">
							<h3 className="font-medium">{fakeNew.title}</h3>
						</div>
						<div className="border-2 m-2">
							<LinkNews link={fakeNew.link} />
						</div>
						<div className="border-2 m-2">
							<a href="../temp/teste.txt" className="underline text-green-500">
								{fakeNew.link}
							</a>
						</div>
						<div className="mx-2 my-12 flex justify-between">
							<div className="mx-auto flex">
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									onClick={() => onVote(fakeNew.id, 1)}
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<p className="ml-2 text-yellow-800 font-semibold">
									{fakeNew.ups}
								</p>
							</div>
							<div className="mx-auto flex">
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									onClick={() => onVote(fakeNew.id, -1)}
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
										clipRule="evenodd"
									/>
								</svg>
								<p className="ml-2 text-yellow-800 font-semibold">
									{fakeNew.downs}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default FakeNews;
