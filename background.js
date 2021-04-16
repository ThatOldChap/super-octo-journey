// Get the title Element on the page
// titleElem = document.getElementsByTagName("head")[0].getElementsByTagName("title")[0]
// currentTitle = document.title

// Find the element that has the item number
/* 
    Url List:
        Item:           http://plm.mdsaero.com/Omnify7/Apps/Desktop/Item/Object.aspx?id=23361
        ECO:            http://plm.mdsaero.com/Omnify7/Apps/Desktop/Change/Object.aspx?id=3375
        Vendor:         http://plm.mdsaero.com/Omnify7/Apps/Desktop/Vendor/Object.aspx?id=102 
        Vendor Item:    http://plm.mdsaero.com/Omnify7/Apps/Desktop/VendorItem/Object.aspx?id=16515
        CAPA:           http://plm.mdsaero.com/Omnify7/Apps/Desktop/Quality/Object.aspx?id=433  
        Project:        http://plm.mdsaero.com/Omnify7/Apps/Desktop/Project/Object.aspx?id=61
        Service Object: http://plm.mdsaero.com/Omnify7/Apps/Desktop/Service/Object.aspx?id=416
        Desktop:        http://plm.mdsaero.com/Omnify7/Apps/Desktop/Default.aspx   
*/

// Get the url of the webpage
url = document.URL

// Get the type of object the page is currently on
objectType = url.split("/")[6]

partNum = document.getElementById("frmGeneral_dgGeneralFields_lblGeneralPage_Field_Value_0")

// Set the new title
document.title = partNum

/* newTitle = switch () {
    case value:
        
        break;

    default:
        break;
} */


