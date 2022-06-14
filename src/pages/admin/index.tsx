import { Main } from 'components';
import { withDashboard } from 'hocs';

function Home() {
  return <Main />;
}

export default withDashboard(Home);
