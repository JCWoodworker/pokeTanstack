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
		<div>
			<button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Previous
			</button>
			{Array.from({ length: totalPages }, (_, index) => (
				<button
					className={page === index + 1 ? "activePaginationButton" : ""}
					key={index}
					onClick={() => setPage(index + 1)}
				>
					{index + 1}
				</button>
			))}
			<button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
				Next
			</button>
		</div>
	)
}

export default Pagination
