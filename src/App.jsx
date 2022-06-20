import * as React from "react"
import {useState} from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()
console.log(categories)
export function App() {
const [categoryStat, setCategory] = React.useState("")
const [restaurantStat, setRestaurant] = React.useState("")
const [menuStat, setMenu] = React.useState(null)
 function handleOnClickCategory (category){
    console.log(';dfd;')
    setCategory(category)
  }
function handleOnClickRestaurant (restaurant){
    console.log(';dfd;')
    setRestaurant(restaurant)
   }
const currentMenuItems = data.filter(
  (item)=> {
    return item.food_category === categoryStat && item.restaurant === restaurantStat})
console.log(currentMenuItems)
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* Step 2: iterating over props */}
          {categories.map((category, idx)=>(
            <Chip label={category} isActive={category === categoryStat}
            onClick = {() => handleOnClickCategory(category)}
            />
          ))}

        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* Header */}
        <Header 
        title={appInfo.title}
        tagline={appInfo.tagline}
        description={appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {/* Step 2: iterating over props */}
            {restaurants.map((restaurant,idx) =>(
             <Chip label={restaurant} isActive={restaurant === restaurantStat} 
             onClick = {() => handleOnClickRestaurant(restaurant)}/>   
            ))}
            </div>
        </div>
        {/* Instructions  */}
        <Instructions 
        instructions={appInfo.instructions.start}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item, itemData)=>{
              return(
              <Chip
              key = {`${item.item_name}==>(${itemData})`}
              label = {item.item_name}
              onClick={() => setMenu(item)}
              isActive = {setMenu && setMenu.item_name === item.item_name}
              />
              )
            }
          ) 
        }
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{/* YOUR CODE HERE */}</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
