import { useCreateBrandMutation } from "../../redux/services/brandApi/brandApi";
import { useCreateCategoryMutation } from "../../redux/services/categoryApi/categoryApi"
import { useCreateProductMutation, useCreateSuuplierMutation } from "../../redux/services/supplierApi/supplierApi";


export default function JwtTestComponent() {

    // create category hook 
    const [onHandleCreateCategory, { data: categoryData }] = useCreateCategoryMutation();
    // create supplier hook
    const [onHandleCreateSupplier, { data: supplierData }] = useCreateSuuplierMutation();

    // create brand hook 
    const [onHandleCreateBrand, { data: brandData }] = useCreateBrandMutation();

    // create new product hook
    const [onHandleCreateNewProduct, { data: productData }] = useCreateProductMutation();

    console.log(productData)

    // function handleCreateCategory
    const handleCreateCategory = () => (
        // mock data of create category
        onHandleCreateCategory({
            "name": "Summer Vibes Collection v1",
            "description": "A curated selection of seasonal essentials designed for warmth, comfort, and effortless style.",
            "media": "https://images.example.com/summer-vibes-collection.jpg"
        })
    )

    // console log of category
    console.log("category data: ", categoryData);


    // function create supplier 
    const handleCreateSupplier = () => (
        onHandleCreateSupplier(
            {
                "name": "Jane Mitchell",
                "email": "jane.mitchell@example.com",
                "phone": "+1-555-342-8801",
                "address": {
                    "addressLine1": "Apartment 4B",
                    "addressLine2": "Rosewood Heights",
                    "road": "742 Elmwood Drive",
                    "linkAddress": "https://maps.example.com/742-elmwood-drive-springfield"
                }
            }
        )
    )

    console.log("===> data of supplier: ", supplierData)

    // handle create brand
    const hanleCreateBrand = () => (
        onHandleCreateBrand(
            {
                "name": "Horizon Apparel",
                "description": "Premium streetwear brand blending minimalist design with bold cultural influences.",
                "brandLogo": "https://assets.example.com/logos/horizon-apparel-logo.gif"
            }
        )
    )
    console.log("===> brand data: ", brandData)

    // handleCreate new product 
    const handleCreateNewProduct = () => (
    
        onHandleCreateNewProduct(
            {
                "name": "ProBook UltraSlim 156",
                "description": "A high-performance ultrabook designed for professionals and creatives. Featuring a stunning 15-inch display, whisper-quiet cooling, and all-day battery life — built to keep up with your most demanding workflows.",
                "computerSpec": {
                    "processor": "Intel Core i7-1360P 12-Core (up to 5.0GHz)",
                    "ram": "16GB LPDDR5 5200MHz",
                    "storage": "512GB NVMe PCIe Gen 4 SSD",
                    "gpu": "NVIDIA GeForce RTX 3050 4GB GDDR6",
                    "os": "Windows 11 Pro",
                    "screenSize": "15.6 inch FHD IPS 144Hz Anti-Glare",
                    "battery": "72Wh Li-Ion, up to 12 hours"
                },
                "stockQuantity": 48,
                "priceIn": 850.00,
                "priceOut": 1199.99,
                "discount": 10,
                "color": [
                    {
                        "color": "Midnight Black",
                        "images": [
                            "https://assets.example.com/products/probook-ultraslim-15/black/front.jpg",
                            "https://assets.example.com/products/probook-ultraslim-15/black/side.jpg",
                            "https://assets.example.com/products/probook-ultraslim-15/black/back.jpg"
                        ]
                    },
                    {
                        "color": "Platinum Silver",
                        "images": [
                            "https://assets.example.com/products/probook-ultraslim-15/silver/front.jpg",
                            "https://assets.example.com/products/probook-ultraslim-15/silver/side.jpg",
                            "https://assets.example.com/products/probook-ultraslim-15/silver/back.jpg"
                        ]
                    },
                    {
                        "color": "Space Gray",
                        "images": [
                            "https://assets.example.com/products/probook-ultraslim-15/gray/front.jpg",
                            "https://assets.example.com/products/probook-ultraslim-15/gray/side.jpg",
                            "https://assets.example.com/products/probook-ultraslim-15/gray/back.jpg"
                        ]
                    }
                ],
                "thumbnail": "https://assets.example.com/products/probook-ultraslim-15/thumbnail.jpg",
                "warranty": "2 Years International Manufacturer Warranty",
                "availability": true,
                "images": [
                    "https://assets.example.com/products/probook-ultraslim-15/gallery/img1.jpg",
                    "https://assets.example.com/products/probook-ultraslim-15/gallery/img2.jpg",
                    "https://assets.example.com/products/probook-ultraslim-15/gallery/img3.jpg",
                    "https://assets.example.com/products/probook-ultraslim-15/gallery/img4.jpg"
                ],
                "categoryUuid": "6abd6b9a-8b9a-4613-bc2d-42686156a313",
                "supplierUuid": "7dd85516-733b-4d47-a445-583c225fb833",
                "brandUuid": "c273f461-4492-4f00-9d69-8e12d0dd9d8b"
            }
        )
    )

    return (
        <div className="flex gap-8">
            <h1>Create Product with endpoint security</h1>

            {/* button category */}
            <p>Category UUId: {categoryData?.uuid}</p>
            <button className="border bg-red-300 p-4"
                onClick={handleCreateCategory}
            >Create Category</button>

            {/* button supplier */}
            <button className="border bg-yellow-300 p-4"
                onClick={handleCreateSupplier}
            >Create Supplier</button>

            {/* button  brand*/}
            <button className="border bg-blue-300 p-4"
                onClick={hanleCreateBrand}
            >Create Brand</button>

            {/* button product */}
            <button className="border bg-pink-300 p-4"
                onClick={handleCreateNewProduct}
            >Create Product</button>

            {/* <p>
                {
                    JSON.stringify(productData)
                }
            </p> */}

        </div>
    )
}
