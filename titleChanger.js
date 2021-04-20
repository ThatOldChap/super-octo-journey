// Find the element that has the item number
/* 
    Url List:
		Objects:
			Item:           https://plm.mdsaero.com/Omnify7/Apps/Desktop/Item/Object.aspx?id=23361
			ECO:            https://plm.mdsaero.com/Omnify7/Apps/Desktop/Change/Object.aspx?id=3375
			Vendor:         https://plm.mdsaero.com/Omnify7/Apps/Desktop/Vendor/Object.aspx?id=102 
			Vendor Item:    https://plm.mdsaero.com/Omnify7/Apps/Desktop/VendorItem/Object.aspx?id=16515 (get the vendor P/N first or remove the "- MANUFACTURER")
			CAPA:           https://plm.mdsaero.com/Omnify7/Apps/Desktop/Quality/Object.aspx?id=433  
			Project:        https://plm.mdsaero.com/Omnify7/Apps/Desktop/Project/Object.aspx?id=61
			Service Object: https://plm.mdsaero.com/Omnify7/Apps/Desktop/Service/Object.aspx?id=416        
			Document:		https://plm.mdsaero.com/Omnify7/Apps/Desktop/Document/Default.aspx

		Searches: 
			Database:		https://plm.mdsaero.com/Omnify7/Apps/Desktop/Search/Default.aspx
			Quick:			https://plm.mdsaero.com/Omnify7/Apps/Desktop/Search/QuickFind.aspx
			Keyword: 		https://plm.mdsaero.com/Omnify7/Apps/Desktop/Search/Keyword.aspx
			Tasks:			https://plm.mdsaero.com/Omnify7/Apps/Desktop/Search/Tasks.aspx
			Field:			https://plm.mdsaero.com/Omnify7/Apps/Desktop/Search/FieldBrowser.aspx
			
		Assorted:
			Desktop:        https://plm.mdsaero.com/Omnify7/Apps/Desktop/Default.aspx
			Preferences:	https://plm.mdsaero.com/Omnify7/Apps/Desktop/Preferences/Default.aspx
			New Object:		https://plm.mdsaero.com/Omnify7/Apps/Desktop/NewObject/Default.aspx
			Reporter: 		https://plm.mdsaero.com/Omnify7/Apps/Reporter/Default.aspx
			Admin:			https://plm.mdsaero.com/Omnify7/Apps/Administrator/Default.aspx
			Login: 			https://plm.mdsaero.com/Omnify7/Apps/Login.aspx 
			Server Home:	https://plm.mdsaero.com/Omnify7/Default.aspx
				
*/
// Initialize the titles
let newTitle;
let prevTitle = "";
let newTitleID = "";

$(document).ready(function() {

	// Update the WebPage title as the page loads
	updateTitle();

    // Create an observer on the title element
    let observer = new MutationObserver(updateTitle);
    observerOptions = {childList: true};
    observer.observe($('head > title')[0], observerOptions);
    
    // Update the title of the WebPage if there is a change
    function updateTitle() {    
	
		// Get the url of the webpage
		let url = document.URL;

		// Get the type of object the page is currently on
		let splitURL = url.split("/");
		let serverPage = splitURL[5];
		let objectType = splitURL[6];
		console.log(`serverPage = ${serverPage}, objectType = ${objectType}`);
	
		// Get the title text based on the type of object    
		switch (serverPage) {
			case 'Reporter':
				newTitleID = '#lblMainHeader_Title';
				newTitle = $(newTitleID)[0].innerText;
				break;
			case 'Administrator':
				newTitleID = '#lblMainHeader_Title';
				newTitle = $(newTitleID)[0].innerText;
				break;
			case 'Desktop':
				switch (objectType) {
					case 'Default.aspx':
						newTitleID = '#frmSubTitleMenu_lblMainMenu_Text'; 
						newTitle = $(newTitleID)[0].innerText;
						newTitle = newTitle.replace("Welcome,", "Home Page - ");
						break;
					case 'Item':
						newTitleID = '#frmSubTitleMenu_lblMainMenu_Text';
						newTitle = $(newTitleID)[0].innerText;
						break;
					case 'Change':
						// ecoNum = $('#frmSubTitleMenu_lblMainMenu_Text > b')[0].innerHTML;
						// ecoDesc = $('#frmGeneral_dgGeneralFields_lblGeneralPage_Field_Value_3')[0].innerHTML;
						newTitleID = '#frmSubTitleMenu_lblMainMenu_Text';
						newTitle = $(newTitleID)[0].innerText;
						break;
					case 'Vendor':
						newTitleID = '#frmSubTitleMenu_lblMainMenu_Text > b';						
						newTitle = $(newTitleID)[0].innerText;
						if (newTitle.search("MANUFACTURER") != -1) {
							newTitle = newTitle.replace(" - MANUFACTURER", "");
						} else if (newTitle.search("SUPPLIER") != -1) {
							newTitle = newTitle.replace(" - SUPPLIER", "");
						} else {
							console.log('No valid vendor type found');
						}
						newTitle = "Vendor: " + newTitle;
						break;
					case 'VendorItem':
						newTitleID = '#frmSubTitleMenu_lblMainMenu_Text';
						newTitle = $(newTitleID)[0].innerText;						
						if (newTitle.search("MANUFACTURER") != -1) {
							newTitle = newTitle.replace(" - MANUFACTURER", "");
						} else if (newTitle.search("SUPPLIER") != -1) {
							newTitle = newTitle.replace(" - SUPPLIER", "");
						} else {
							console.log('No valid vendor type found');
						}						
						break;
					case 'Quality':
						// capaNum = $('#frmSubTitleMenu_lblMainMenu_Text > b')[0].innerHTML;
						// capaDesc = $('#frmGeneral_dgGeneralFields_lblGeneralPage_Field_Value_5')[0].innerHTML;					
						newTitleID = '#frmSubTitleMenu_lblMainMenu_Text';
						newTitle = $(newTitleID)[0].innerText;
						break;
					case 'Project':
						// projectNum = $('#frmSubTitleMenu_lblMainMenu_Text > b')[0].innerHTML;
						// projectDesc = $('#frmGeneral_dgGeneralFields_lblGeneralPage_Field_Value_1')[0].innerHTML;
						newTitleID = '#frmSubTitleMenu_lblMainMenu_Text';
						newTitle = $(newTitleID)[0].innerText;
						break;
					case 'Service':
						newTitleID = '#frmSubTitleMenu_lblMainMenu_Text';
						newTitle = $(newTitleID)[0].innerText;
						break;
					case 'Search':
						newTitleID = '#lblMainHeader_Title';
						newTitle = $(newTitleID)[0].innerText;
						break;
					case 'NewObject':
						newTitleID = '#lblMainHeader_Title';
						newTitle = $(newTitleID)[0].innerText;
						break;	
					default:
						// Use the default Omnify title
						break;					
				}
				break;
			default:
				// Use the default Omnify title
				break;
		}
        // Changes the title if it is different from the previous Mutation
		console.log(`newTitle = ${newTitle} and prevTitle = ${prevTitle}`);
        if ($('head > title')[0].innerText != prevTitle) {
            document.title = newTitle;
            prevTitle = newTitle;
        }        
    };
});  
