import { formatter } from "../util/investment";

export default function Result({ annualData }) {
	return (
		<table id="result" className="center">
			<thead>
				<tr>
					<th>YEAR</th>
					<th>INTEREST</th>
					<th>VALUE END OF YEAR</th>
					<th>ANNUAL INVESTMENT</th>
				</tr>
			</thead>
			<tbody>
				{annualData &&
					annualData.map((data) => (
						<tr key={data.year}>
							<td>{data.year}</td>
							<td>{formatter.format(data.interest)}</td>
							<td>{formatter.format(data.valueEndOfYear)}</td>
							<td>{formatter.format(data.annualInvestment)}</td>
						</tr>
					))}
			</tbody>
		</table>
	);
}
