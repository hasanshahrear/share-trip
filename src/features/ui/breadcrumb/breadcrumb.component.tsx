type TProps ={
    breadCrumb: string[]
}

export function Breadcrumb({breadCrumb}: TProps){
  return (
    <nav className="flex items-center text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="inline-flex items-center ">
        {breadCrumb.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== 0 && (
              <svg className="w-4 h-4 text-[#77818C] mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 010-1.414L11.586 10 7.707 6.121a1 1 0 111.414-1.414l4.586 4.586a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            )}
            {index === breadCrumb.length - 1 ? (
              <span className="text-[#1882FF] font-medium">{item}</span>
            ) : (
              <a href="#" className="text-[#5A6573]">{item}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}