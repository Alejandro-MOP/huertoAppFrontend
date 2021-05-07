import React from 'react';
import { useHistory } from 'react-router';
import Card from '../components/Card';

const mainCards = [
	{
		header: 'Crea una Cosecha',
		title: 'Para tu seguimiento del huerto.',
		description:
			'Al iniciar una cosecha podras captirar información diaria y llevar el seguiento de esta',
		route: '/crear-cosecha',
	},
	{
		header: 'Captura datos de tu cosecha',
		title: 'Puedes hacerlo de manera diaria, tu decides.',
		description:
			'Captura los datos principales para monitorear el conjunto de plantas de tu cosecha',
		route: '/cosecha',
	},
	{
		header: 'Ver resumen de una Cosecha',
		title: 'Mira el progreso que registras de tu cosecha',
		description: 'Aquí podras ver la evolución y el detalle por día de tu cosecha',
		route: '/reporte-cosecha',
	},
];

const MainView = () => {
	const history = useHistory();

	const redirectCreateHarvest = route => history.push(`${route}`);

	return (
		<>
			<div className='container'>
				<h2 className=' text-center text-primary mb-2 pt-2'>
					Hola!, selecciona una opción
				</h2>

				<div className='d-flex flex-wrap justify-content-around align-items-center mt-4 py-2'>
					{mainCards.map(({ header, title, description, route }) => (
						<Card
							key={header}
							header={header}
							title={title}
							description={description}
							onClick={() => redirectCreateHarvest(route)}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default MainView;
