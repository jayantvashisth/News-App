import './App.css';
import News from './components/News.js';
import { NewsContextProvider } from './NewsContext';

function App() {
    return (
        <NewsContextProvider>
            <News />
        </NewsContextProvider>)

}

export default App;
