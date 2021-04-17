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
// Initialize the titles
let newTitle;
let prevTitle = "";

$(document).ready(function() {

    // Get the url of the webpage
    let url = document.URL;
    console.log(`document's DOM is ready and url = ${url}`);

    // Get the type of object the page is currently on
    let objectType = url.split("/")[6];
    console.log(`objectType = ${objectType}`);    

    // Get the title text based on the type of object
    let newTitleID = "";
    console.log(`Case = ${objectType}`);
    switch (objectType) {
        case 'Default.aspx':
            newTitleID = '#lblMainHeader_Title';       
            break;
        default:
            newTitleID = '#frmSubTitleMenu_lblMainMenu_Text';
            break;
    }

    // Make the first title change to the WebPage
    newTitle = $(newTitleID)[0].innerText;
    console.log(`newTitle = ${newTitle}`);
    document.title = newTitle;

    // Create an observer on the title element
    let observer = new MutationObserver(updateTitle);
    observerOptions = {childList: true};
    observer.observe($('head > title')[0], observerOptions);
    
    // Update the title of the WebPage if there is a change
    function updateTitle () {    
        newTitle = $(newTitleID)[0].innerText;
        console.log(`newTitle = ${newTitle} and prevTitle = ${prevTitle}`);

        // Changes the title if it is different from the previous Mutation
        if ($('head > title')[0].innerText != prevTitle) {
            document.title = newTitle;
            prevTitle = newTitle;
        }        
    };
});  