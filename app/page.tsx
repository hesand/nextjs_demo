//'use client';
import Hello from '@/components/hello';

const Home = () => {
console.log("Home Page Rendered from server");

  return (
    <main>
        <div className="text-5xl underline">Home Page2</div>  
        <Hello />
    </main>
  );
}

export default Home