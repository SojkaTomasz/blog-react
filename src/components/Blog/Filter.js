import "./styles/filter.css"

function Filter(props) {
	return (
		<div className='box-filter'>
			<input
				className='filter-input form-input'
				type='text'
				value={props.valueSearch}
				onChange={e =>
					props.dispatch({ type: "setValueSearch", valueSearch: e.target.value })
				}
				placeholder='Szukaj...'
			/>
			<div>
				<select
					className='select-filter'
					value={props.sort}
					onChange={e => props.dispatch({ type: "setSort", sort: e.target.value })}
				>
					<option value='latest'>Od najnowszych</option>
					<option value='oldest'>Od najstarszych</option>
					<option value='a-z'>Alfabetycznie A-Z</option>
					<option value='z-a'>Alfabetycznie Z-A</option>
				</select>
				<select
					className='select-filter'
					onChange={e =>
						props.dispatch({
							type: "setBlogsPerPage",
							blogsPerPage: e.target.value,
						})
					}
					onClick={() =>
						props.dispatch({
							type: "setBlogsPerPage",
							blogsPerPage: props.blogsPerPage,
						})
					}
					value={props.blogsPerPage}
				>
					<option value='5'>5</option>
					<option value='10'>10</option>
					<option value='20'>20</option>
				</select>
			</div>
		</div>
	)
}

export default Filter
