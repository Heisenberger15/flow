export const Searchbar = () => {
	return (
		<div className="w-full h-[68px] flex items-center justify-center">
			<input
				type="text"
				dir="auto"
				className="w-full max-w-[calc(100%_-_2rem)] px-3 bg-[rgb(44,44,44)] mx-auto rounded-[1.375rem] h-[44px] text-white"
				placeholder="Search"
				autoComplete="off"
			/>
		</div>
	);
};
