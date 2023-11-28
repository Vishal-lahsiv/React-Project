import WithProductList from './WithProductList'
import ProductListComponent from './ProductListComponent'
import { Products } from '../../../SharedData'
const EnhancedProductsList = WithProductList(ProductListComponent,Products)

export default EnhancedProductsList;