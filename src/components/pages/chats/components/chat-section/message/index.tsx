const Message = () => {
	return (
		<li className=" bg-gray-700 w-[414px] h-[390px] flex-col justify-end items-center inline-flex">
			<div className="self-stretch h-8 pt-[3px] pb-2.5 justify-start items-center gap-2 inline-flex">
				<div className="text-white text-sm font-normal leading-[19px]">
					but it's not as pretty as the keyboard I'm making now 😎
				</div>
				<div className="pr-2.5 pt-1 pb-px justify-start items-center flex">
					<div className="text-right text-gray-400 text-xs leading-[14px]">
						10:03 AM
					</div>
				</div>
			</div>
		</li>
	);
};

export default Message;
