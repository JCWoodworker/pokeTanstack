interface PaginationProps {
	page: number
	setPage: (page: number) => void
	totalCount: number
	limit: number
}

const Pagination: React.FC<PaginationProps> = ({
	page,
	setPage,
	totalCount,
	limit,
}) => {
	const totalPages = Math.ceil(totalCount / limit)

	return (
		<div className="pagination-container">
			<div className="pagination-buttons-container">
				<button disabled={page === 1} onClick={() => setPage(page - 1)}>
					Prev
				</button>
				<button
					disabled={page === totalPages}
					onClick={() => setPage(page + 1)}
				>
					Next
				</button>
			</div>
			<div className="pagination-numbers-container">
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						className={page === index + 1 ? "activePaginationButton" : ""}
						key={index}
						onClick={() => setPage(index + 1)}
					>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	)
}

export default Pagination
