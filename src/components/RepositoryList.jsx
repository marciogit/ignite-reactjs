
import { useState } from 'react';
import { RepositoryItem } from "./RepositoryItem";

const rep = {
	name: 'my repo',
	desc: 'repo desc',
	link: 'repo link'
}

export function RepositoryList() {

	const [ counter, setCounter ] = useState(0);
	return(
		<section>
			<h1>Lista de Repositórios</h1>

			<ul>
				<RepositoryItem repository={rep}/>
				<RepositoryItem repository={rep}/>
				<RepositoryItem repository={rep}/>
			</ul>

			<section>
				<h1>Counter: {counter}</h1>
				<button type="button" onClick={()=> setCounter(counter+1)}>increment++</button>
			</section>
		</section>
	)
}
