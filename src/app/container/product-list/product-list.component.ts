import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
@Component({
  selector: 'product-list',
  standalone: true,
  imports: [ProductComponent,CommonModule,FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
   products = [
    {
      id: 1,
      name: 'Nike React Infinity Run Flyknit',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1682a4d8-5784-4caa-bbc8-0472199a6097/custom-reactx-infinity-rn-4-by-you.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'Nike React Miler',
      description: 'This shoe provides durability and comfort for long-distance runs.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 130,
      discountPrice:125,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/358c5987-8fae-4fad-bae1-dd916cc39185/NIKE+INITIATOR.png',
      slug: 'nike-react-miler',
    },
    {
      id: 3,
      name: 'Adidas Ultraboost 22',
      description: 'Experience the ultimate comfort with Adidas Ultraboost 22.',
      brand: 'ADIDAS',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10, 11],
      color: ['Black', 'Grey', 'Blue'],
      price: 180,
      discountPrice:140,
      is_in_inventory: true,
      items_left: 10,
      imageURL:
      'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/9a76e208-a254-492a-ab71-ca63403b69d8/air-heights-womens-shoes-Nr1ll3.png',
      slug: 'adidas-ultraboost-22',
    },
    {
      id: 4,
      name: 'Puma Velocity Nitro 2',
      description: 'A lightweight, versatile shoe for runners of all levels.',
      brand: 'PUMA',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [5, 6, 7, 8, 9],
      color: ['Pink', 'Black', 'White'],
      price: 140,
      discountPrice:138,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f080007f-84db-4539-b750-06fa07662761/NIKE+POLE+VAULT+ELITE.png',
      slug: 'puma-velocity-nitro-2',
    },
    {
      id: 5,
      name: 'Asics Gel-Nimbus 24',
      description: 'Offers superior cushioning and support for long-distance runs.',
      brand: 'ASICS',
      gender: 'MEN',
      category: 'RUNNING',
      size: [7, 8, 9, 10, 11, 12],
      color: ['Blue', 'Black', 'Grey'],
      price: 150,
      is_in_inventory: true,
      items_left: 7,
      imageURL:
      'https://static.nike.com/a/images/w_1920,c_limit/6730df9f-57d1-4492-ad3b-471e6b00282e/introducing-the-nike-kids%E2%80%99-cosmic-runner-an-out-of-this-world-shoe-made-for-kids-on-the-move.jpg',
      slug: 'asics-gel-nimbus-24',
    },
    {
      id: 6,
      name: 'New Balance Fresh Foam 1080v12',
      description: 'Premium cushioning for high-mileage comfort.',
      brand: 'NEW BALANCE',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [5, 6, 7, 8, 9, 10],
      color: ['White', 'Teal', 'Pink'],
      price: 160,
      discountPrice:152,
      is_in_inventory: true,
      items_left: 12,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18feae27-20d6-4ab1-bb12-c02ea4650903/WMNS+AIR+JORDAN+1+ELEVATE+HIGH.png',
      slug: 'new-balance-fresh-foam-1080v12',
    },
    {
      id: 7,
      name: 'Reebok Floatride Energy 4',
      description: 'A versatile shoe designed for speed and comfort.',
      brand: 'REEBOK',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10, 11],
      color: ['Black', 'Orange', 'Blue'],
      price: 120,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ded1faa6-e625-4d08-81aa-0026fc46472f/JORDAN+ONE+TAKE+4.png',
      slug: 'reebok-floatride-energy-4',
    },
    {
      id: 8,
      name: 'Under Armour HOVR Machina 3',
      description: 'Technology-packed shoes for runners seeking performance.',
      brand: 'UNDER ARMOUR',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [5, 6, 7, 8, 9],
      color: ['Pink', 'White', 'Black','Blue'],
      price: 170,
      discountPrice:120,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18feae27-20d6-4ab1-bb12-c02ea4650903/WMNS+AIR+JORDAN+1+ELEVATE+HIGH.png',
      slug: 'under-armour-hovr-machina-3',
    },
    {
      id: 9,
      name: 'Hoka Clifton 8',
      description: 'A lightweight shoe with soft cushioning for daily runs.',
      brand: 'HOKA',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10, 11],
      color: ['Blue', 'White', 'Black'],
      price: 140,
      is_in_inventory: true,
      items_left: 9,
      imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e3e9cb4-9ca1-47a5-ac13-8ffe8ae557a8/W+NIKE+METCON+9+FLYEASE.png',
      slug: 'hoka-clifton-8',
    },
    {
      id: 10,
      name: 'Mizuno Wave Rider 25',
      description: 'Built for smooth transitions and an energized ride.',
      brand: 'MIZUNO',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [5, 6, 7, 8, 9, 10],
      color: ['White', 'Purple', 'Pink'],
      price: 130,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18feae27-20d6-4ab1-bb12-c02ea4650903/WMNS+AIR+JORDAN+1+ELEVATE+HIGH.png',
      slug: 'mizuno-wave-rider-25',
    },
    {
      id: 11,
      name: 'Brooks Ghost 14',
      description: 'Soft, smooth, and perfect for a distraction-free run.',
      brand: 'BROOKS',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['Black', 'Grey', 'Blue','Purple', 'Pink'],
      price: 110,
      discountPrice:100,
      is_in_inventory: true,
      items_left: 11,
      imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3f05267-d825-4a62-9d73-3dc6c3d5e4f5/AIR+ZOOM+PEGASUS+41.png',
      slug: 'brooks-ghost-14',
    },
    {
      id: 12,
      name: 'Saucony Endorphin Speed 3',
      description: 'Delivers speed and responsiveness for race day or training.',
      brand: 'SAUCONY',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [5, 6, 7, 8, 9],
      color: ['Pink', 'Yellow', 'Black'],
      price: 160,
      is_in_inventory: true,
      items_left: 8,
      imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/471db92e-9f03-44d1-bd5f-f5af012cf9c9/W+AIR+ZOOM+ALPHAFLY+NEXT%25+3.png',
      slug: 'saucony-endorphin-speed-3',
    },
    {
      id: 13,
      name: 'Altra Escalante Racer',
      description: 'A fast, responsive shoe for road racing.',
      brand: 'ALTRA',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10, 11],
      color: ['Blue', 'Yellow', 'Black','Purple', 'Pink'],
      price: 140,
      discountPrice:138,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d100019-dd63-4c7f-b053-3efe290071d9/JR+SUPERFLY+10+CLUB+IC.png',
      slug: 'altra-escalante-racer',
    },
    {
      id: 14,
      name: 'On Cloudswift',
      description: 'A shoe built for comfort with a stylish design.',
      brand: 'ON',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [5, 6, 7, 8, 9],
      color: ['Purple', 'Blue', 'Black'],
      price: 150,
      discountPrice:138,
      is_in_inventory: true,
      items_left: 10,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18feae27-20d6-4ab1-bb12-c02ea4650903/WMNS+AIR+JORDAN+1+ELEVATE+HIGH.png',
      slug: 'on-cloudswift',
    },
{
  id: 15,
  name: 'Nike Air Zoom Pegasus 40',
  description: 'A trusted daily trainer with a responsive feel.',
  brand: 'NIKE',
  gender: 'MEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9, 10, 11],
  color: ['Black', 'White', 'Red'],
  price: 120,
  discountPrice:118,
  is_in_inventory: true,
  items_left: 8,
  imageURL:
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85728414-91ea-4c42-a406-c018df6d1d28/NIKE+REACTX+PEGASUS+TRAIL+5.png',
  slug: 'nike-air-zoom-pegasus-40',
}  
];

totalProductCount = this.products.length
totalProductInStock = this.products.filter(p => p.is_in_inventory===true).length
totalProductOutOfStock = this.products.filter(p => p.is_in_inventory===false).length

selectedFilterRadioButton: string = 'all';

onFilterchanged(value:string){
  console.log(value)
  this.selectedFilterRadioButton = value
}

 @Input()
 searchText:string = ''




}