import { useParams } from "react-router-dom";

export default function Category() {
    const { slug } = useParams();
    
    return (
        <div>
            <h2>Categorie</h2>
        </div>
    );
}