const useFetchApi = (apiUrl) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)


	useeffect(() => {
		setLoading(true)
		const fetchData = async () => {
			try {
				const res = await fetch(apiUrl)
				const data = await res?.json()

				setData(data)
				setLoading(false)
			} catch (error) {
				setLoading(false);
				setError(error)
			}
		}
		fetchData();
	}, [apiUrl])

	return {
		data, error, loading
	}
}



const App = () => {
	const { loading, data, error } = useFetchApi("http:// www.google.com/")
	return (
		<>
			{loading && <p> loading .....</p>}
			{!loading && error ? (<p>there is error</p>) : (
				<p>{json.stringify(data)}</p>
			)}
		</>
	)
}