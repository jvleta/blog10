import Loader from '../components/Loader';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <main>
        <button onClick={() => toast.success('heelllllooooo')}>Say hello</button>
        <Loader show={false} />
      </main>
    </div>
  );
}
