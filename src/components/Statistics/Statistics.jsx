import { StatList } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatList class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map(stat => (
          <li class="item" key={stat.id}>
            <span class="label"> {stat.label} </span>
            <span class="percentage"> {stat.percentage} % </span>
          </li>
        ))}
      </ul>
    </StatList>
  );
};