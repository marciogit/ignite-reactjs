
export function RepositoryItem(props) {
	return (
		<li>
			<strong>{props.repository.name}</strong>
			<p>{props.repository.desc}</p>
			<a href={props.repository.link}>Repo</a>
		</li>
	)
}
