import Projects from "./components/Projects";
import { importAllImages } from "./utils/utils";

const importedImages = importAllImages(
  require.context("./assets/images", false, /\.(png|jpe?g|svg)$/)
);

export const images = [
  importedImages["diablo_3.png"].default,
  importedImages["image_searcher.png"].default,
  importedImages["calculadora_de_interes_compuesto.png"].default,
  importedImages["user_manager.png"].default,
  importedImages["shopping_cart.png"].default,
  importedImages["react_dex.png"].default,
  importedImages["vuedex.png"].default,
  importedImages["vuejs_ecommerce_template.png"].default,
  importedImages["batatabit.png"].default,
];

function App() {
  return (
    <div>
      <Projects images={images} />
    </div>
  );
}

export default App;
