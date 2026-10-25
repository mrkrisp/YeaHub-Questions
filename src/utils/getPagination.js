export function getPagination(currentPage, total, limit=10) {
	const pages = []

	const countPages = Math.ceil(total/limit)

	if(countPages === 0) {
		return {pages, canClickPrevious: false, canClickNext: false}
	}

	const start = Math.max(1, currentPage - 2)
	const end = Math.min(currentPage + 3, countPages)

	if(start - 2 > 1) {
		pages.push(1, '...')
	}

	for(let page = start; page <= end; page++) {
		pages.push(page)
	}

	if(!pages.includes(countPages)) {
		pages.push('...', countPages)
	}

	return {
		pages,
		canClickPrevious: currentPage>1, 
		canClickNext: currentPage < countPages
	}
}	