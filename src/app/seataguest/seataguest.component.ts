import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SeataguestService } from './seataguest.service'
import { SharedService } from '../shared/Shared.Service';
import { Router } from '@angular/router';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
    selector: 'seataGuest',
    templateUrl: './seataguest.component.html',
    styleUrls: ['./seataguest.style.css'],
    providers: [ToastsManager, ToastOptions]

})

export class SeataGuestComponent implements OnInit {
    public seatguestdetails: any = [];
    public imagepath: any;
    public filterHostids: any=[];
    public show: boolean = true;;
    public filteredarray: any
    public trimmedArray: any = [];
    public filteredhostessArray: any = [];
    public user_accept: any;
    public count = 0;
    public selected_objects: any = [];
    public error_message: any;
    public showmessage = false;
    public imageborder: any;
    public active: boolean = false;
    public servers: any;
  public waitlist: any;
  public popUpServerSelected: boolean = false;
  public selectedRow: string;
    public issideOpen: boolean = false;
    public before_sort: any; 
  public restID = localStorage.getItem('restaurantid');
 public openDate = localStorage.getItem('OpenDate');
    public select_tab: any;
    public unique_id: any;
    public getrowData: any;
    public tblResLength: any;
    public toogleBool: boolean = true;
    public style = {};
    public error_msg: any;
    public errorcode;
    public statusmessage;
    public blExceedsPartySize: boolean = false;

    public getTableType: any;
    public TotalSelectable: any;
    public SeatedNowCount:any;
    public showDialog: any;
    public commonmessage: any;
    public getseatednow_count: any;
    public QuotedTime: any;

    /*added code */
    public table_types: any;
    public table_numbers: any;
    public HostessIdValues: any;
    public HostessNames: any;
    public TableNames: any;   
    public partysize: any;
    public servers_info: any;
    public servers_selected = [];
    public servers_tables = [];
    public currentindex: any;
    public LoggedInUser: any;
    public getServerFlyOut: boolean = true;
    public classapply: boolean = false;
    public showProfile: boolean = false;
    public guestWaitflyout: boolean = false;
  public guestServersflyout: boolean = false;
  public selectedTableType: any = [];
  public tableSizeIncrese: boolean = false;
  public tooManyTableCheck: any;
  public hostNotSelected: boolean = false;
  public serverSelectedArray:any;
  public template: any;
  public callPostselectedServer: boolean = false;
  public floorSelected: string = "";
    //public flyOutBtn: boolean = true;
    /*added code end*/

   /*added for reassign server */
    public modalRef: BsModalRef; 
    public Tbltypes = [];
    public finalArray = [];
    public unassignedservers: any;
    // public confirm_message: any;
    ngOnInit() {       
        this.imagepath = 'data:image/JPEG;base64,';
        this.getseated(this.restID);
        this.getwaitlist();
        this.getservers();
      //  this.show = true;
        this.getrowData = localStorage.getItem('acceptoffer rowdata');    
        this.LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));  
        this.user_accept = JSON.parse(this.getrowData);      
        this.unique_id = localStorage.getItem('uniqueid');
    }

    public removeDuplicates(originalArray, objKey) {
        var values = [];
        var value;
        for (var i = 0; i < originalArray.length; i++) {
            value = originalArray[i][objKey];
            if (values.indexOf(value) === -1) {
                this.trimmedArray.push(originalArray[i]);
                values.push(value);
            }
        }
        return this.trimmedArray;
    }

    constructor(private seataguestService: SeataguestService, public sharedService: SharedService, private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef, private modalService: BsModalService) {
        this.style = JSON.parse(localStorage.getItem("stylesList")) || [];
        this._toastr.setRootViewContainerRef(vRef);
    }
 
  SeatGuestflyoutClicks() {
    this.guestWaitflyout = true;
    this.guestServersflyout = false;

    if (this.showProfile == false) {
      this.showProfile = true;
    }
  }

  guestServersflyoutClicks() {
    this.guestWaitflyout = false;
    this.guestServersflyout = true;

    if (this.showProfile == false) {
      this.showProfile = true;
    }
  }

  public getseated(restID: any) {
    this.popUpServerSelected = false;
        this.seataguestService.getseateddetails(restID).subscribe((res: any) => {          
            var Tbltypes = [];
            console.log(res);
            this.finalArray = res._Data.Table;
            console.log(this.finalArray);
            res._Data.Table.forEach((item) => {
                Tbltypes.push(item.TableType);
            })         
            this.Tbltypes = this.removeDuplicate_servers(Tbltypes);
          if (this.user_accept.PartySize > 2 && this.user_accept.PartySize <= 4)
          { this.Tbltypes = [4, 2, 6, 8] }
          else if (this.user_accept.PartySize > 4 && this.user_accept.PartySize <= 6)
          { this.Tbltypes = [6, 2, 4, 8] }
          else if (this.user_accept.PartySize > 6 && this.user_accept.PartySize <= 8)
          { this.Tbltypes = [8, 2, 4, 6] }
            if (res._Data.length == 0) {
                this.seataguestService.emptyResponse(restID).subscribe((res: any) => {
                    this.errorcode = res._ErrorCode;
                    this.statusmessage = res._Data;
                    if (this.errorcode == 50000) {
                        this._toastr.error(this.statusmessage);
                    }
                })
            }
            else {
                if (res._Data.length > 0) {
                    this.seatguestdetails = res._Data.sort(function (a, b) {
                        return a.TableNumber - b.TableNumber;
                    })
                }
                this.tblResLength = res._Data.Table.length;

                this.filterHostids = [];
                res._Data.Table1.forEach((item) => { 
                    this.filterHostids.push({
                          "HostessName": item.HostessName,
                          "HostessID": item.HostessID,
                          "HostessColor": item.HostessColor,
                          "OccupancyPer": item.OccupancyPer
                         });
                })   
            }
        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        });
  }
  addServerOnConfirm(addserver: any, list: any) {
    if (list.TableNumber) {
      this.table_numbers = list.TableNumber;
    }
    this.openModal(addserver);
    this.seataguestService.GetServerwiseSnap(this.restID).subscribe((res) => {
      console.log(res);
      this.unassignedservers = res._Data;

    })
  }
    AddServers(addserver: any,list:any) {

      /*  this.HostessIdValues = list.HostessID;*/
      if (this.selected_objects.length == 0) {
        if (list.TableNumber) {
          this.table_numbers = list.TableNumber;
        }
        this.openModal(addserver);
        this.seataguestService.GetServerwiseSnap(this.restID).subscribe((res) => {
          console.log(res);
          this.unassignedservers = res._Data;

        })
      }
    }
 
    //select seats
  selectseats(selectseats: any) {
    //if (selectseats.HostessID == 0) {
    //}
    //else {
    if (this.floorSelected == "") { this.floorSelected = selectseats.FloorNumber }
    if (this.floorSelected != "") {
      if (this.count > 0) {
        if (selectseats.TableStatus == false) {
          if (this.floorSelected != selectseats.FloorNumber) {
            return 0;
          }
        }
      }
    if (this.selected_objects.length < 6) {
      this.finalArray.forEach((itemdata, index) => {
        if (itemdata.TableNumber == selectseats.TableNumber && itemdata.TableStatus == false) {
          this.finalArray[index].TableStatus = !this.finalArray[index].TableStatus;
          this.imageborder = true;
          return;
        }
        else {
          if (itemdata.TableNumber == selectseats.TableNumber && itemdata.TableStatus == true) {
            this.finalArray[index].TableStatus = !this.finalArray[index].TableStatus;
            this.classapply = false;
            return;
          }
        }
      })
    }

    else if (this.selected_objects.length >= 6) {
      this.finalArray.forEach((itemdata, index) => {
        if (itemdata.TableNumber == selectseats.TableNumber && itemdata.TableStatus == true) {
          this.finalArray[index].TableStatus = !this.finalArray[index].TableStatus;
          return;
        }

      })
    }

    if (this.selected_objects.length) {

      let index = this.selected_objects.findIndex(function (selectedobject) {
        return selectedobject.TableNumber === selectseats.TableNumber;
      })
      if (index >= 0) {
        this.selected_objects[index] = selectseats;
        if (selectseats.TableStatus == true) {
          this.count = this.count + selectseats.TableType;
        }
        else {
          this.count = this.count - selectseats.TableType;
          this.selected_objects.splice(index, 1);
          if (this.count <= 0 && this.floorSelected != "") {
            this.floorSelected = "";
          }
        }

      }
      else {
        if (this.selected_objects.length < 6) {
          this.selected_objects.push(selectseats);
          this.count = this.count + selectseats.TableType;

        }
        else {
          //alert("Can not select morethan 6 tables");
          this.showDialog = true;
          this.commonmessage = "Can not select morethan 6 tables"
        }
      }
    }
    else {
      this.selected_objects.push(selectseats);
      this.count = this.count + selectseats.TableType;
    }

    if (this.count > 0 && this.count < this.user_accept.PartySize) {
      this.showmessage = true;
      this.active = false;
      this.toogleBool = true;
      this.blExceedsPartySize = false;
      this.error_message = "please select another table to accommodate this large party";
    } else if (this.count == 0) {
      this.showmessage = false;
      this.active = false;
      this.toogleBool = true;
      this.blExceedsPartySize = false;
    }
    else {
      this.active = true;
      this.showmessage = false;
      this.toogleBool = false;
      this.blExceedsPartySize = false;
    }

    // }
  }
    }

    //showFlyout() {
    //  this.classapply = true;
    //  this.flyOutBtn = false;
    //}

    //show waitlist in seataguest sidenav
    public gethostess(HostessID: any) {
        this.show = !this.show;       
        let copyoffinalarry = this.finalArray;
        this.filteredarray = copyoffinalarry.filter(function (tag) {
            return tag.HostessID == HostessID;
        });      
        if (this.filteredarray != '' || this.filteredarray != undefined) {
            this.filteredhostessArray = [];
            this.filteredhostessArray.push(this.filteredarray[0]);
        }

       
    }

    //show servers in seataguest sidenav
    getservers() {
        this.select_tab = 'servers';       
        this.seataguestService.getservers(this.restID).subscribe((res: any) => {
            this.servers = res._Data;            

        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        })
    }

    getwaitlist() {
        this.select_tab = 'waitlist';       
      this.seataguestService.getwaitlist(this.restID, this.openDate).subscribe((res: any) => {
            this.waitlist = res._Data;
        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        })
    }
    //Functionality for closing side nav
    closeProile() {       
        this.showProfile = false;      
    }
  back() {
    localStorage.setItem("backButtonClicked", "true");
    this.router.navigate(['addGuest']);
  }

    PreviousPage() {
        if (this.unique_id == "addguest") {
            this.router.navigate(['waitlist']);
        }
        else if (this.unique_id == "edit_guest") {

            this.sharedService.editguestDetails = this.user_accept;
            this.router.navigate(['editguest']);
        }
        else if (this.unique_id == "notify") {
            this.router.navigate(['waitlist']);
        }
        else if (this.unique_id == "accept_offer") {
            this.router.navigate(['waitlist']);
        }
        else if (this.unique_id == "accept_offersidenav") {
            this.router.navigate(['waitlist']);
        }
        else {
            this.router.navigate(['waitlist']);
        }
    }

    removeDuplicate_servers(arr) {
        return arr.filter(function (value, index) {
            return arr.indexOf(value) == index;
        });
    }

    //confirmation of selected seats
  confirm(template: any, addserver:any) {
        this.error_msg = "an error occured";
        var table_array = [];
        var tableType_array = [];
        var servers_array = [];
        var serversNames_array = [];
      var tableNames_array = [];
      this.selectedTableType = [];
      this.tableSizeIncrese = false;
    this.tooManyTableCheck = 0;
    this.hostNotSelected = false;
    this.serverSelectedArray = null;
    this.template = null;
    this.callPostselectedServer = false;
        //  var cntTable = 1;
        console.log(this.selected_objects);
      this.SeatedNowCount = 0

        this.selected_objects.forEach((table, index) => {
            if (table.TableStatus == true) {
                table_array.push(table.TableNumber);
              tableType_array.push(table.TableType);
              if (table.HostessID != 0) {
                servers_array.push(table.HostessID);
                serversNames_array.push(table.HostessName);
              } else {
                this.callPostselectedServer = true;
              }
               // serversNames_array.push(table.HostessName);
                tableNames_array.push(table.TableName);

            }
            if (table.TableType == this.getTableType) {
                this.SeatedNowCount = this.SeatedNowCount + 1;
            }
        })   

      this.selectedTableType = cloneDeep(tableType_array);
      this.selectedTableType.sort(function (a, b) { return a - b });
        this.table_types = tableType_array.join();
        this.table_numbers = table_array.join();
        this.HostessIdValues = this.removeDuplicate_servers(servers_array).join();
        this.HostessNames = this.removeDuplicate_servers(serversNames_array).join();
        this.TableNames = tableNames_array.join();

    if (this.HostessIdValues == "") {
      this.tooManyTableCheck = cloneDeep(parseInt(this.user_accept.PartySize));
      for (let i = this.selectedTableType.length - 1; i >= 0; i--) {
        this.tooManyTableCheck -= this.selectedTableType[i];
        if (this.tooManyTableCheck <= 0 && i != 0) {
          this.tableSizeIncrese = true;
          this.showmessage = true;
          this.error_message = "Too many tables selected for party size"
          return 0;
        } else {
          this.tableSizeIncrese = false;
          this.showmessage = false;
          this.addServerOnConfirm(addserver, table_array);
          this.hostNotSelected = true;
          this.serverSelectedArray = servers_array;
          this.template = template;
        }
      }
     
    } else {

      if (this.restID) {
        this.restID = JSON.parse(this.restID);
      }
      if (this.user_accept.PartySize) {
        this.partysize = JSON.parse(this.user_accept['PartySize']);

      }
      if (this.user_accept.waitquoted) {
        this.QuotedTime = JSON.parse(this.user_accept['waitquoted'])
      }


      //assign multiple server to one server
      if (this.removeDuplicate_servers(servers_array).length > 1) {
        this.seataguestService.getServerwiseDetails(this.restID, this.HostessIdValues).subscribe((res) => {
          console.log(res);
          this.servers_info = res._Data;
        })
        this.tooManyTableCheck = cloneDeep(parseInt(this.user_accept.PartySize));
        for (let i = this.selectedTableType.length - 1; i >= 0; i--) {
          this.tooManyTableCheck -= this.selectedTableType[i];
          if (this.tooManyTableCheck <= 0 && i != 0) {
            this.tableSizeIncrese = true;
            this.showmessage = true;
            this.error_message = "Too many tables selected for party size"
            return 0;
          } else {
            this.tableSizeIncrese = false;
            this.showmessage = false;
          }
        }
        if (this.tableSizeIncrese == false) {
          this.openModal(template);
        }
      }
      //assign multiple server to one server end

      else {
        /* get seated now checking */
        if (this.SeatedNowCount > this.TotalSelectable) {
          this.showDialog = !this.showDialog;
          this.getseatednow_count = this.SeatedNowCount - this.TotalSelectable;
          this.commonmessage = "You have selected " + this.getseatednow_count + " table from allocated GetTableNow. Do you want to continue?"
        }
        else {
          this.tooManyTableCheck = cloneDeep(parseInt(this.user_accept.PartySize));
          for (let i = this.selectedTableType.length - 1; i >= 0; i--) {
            this.tooManyTableCheck -= this.selectedTableType[i];
            if (this.tooManyTableCheck <= 0 && i != 0) {
              this.tableSizeIncrese = true;
              this.showmessage = true;
              this.error_message = "Too many tables selected for party size"
              return 0;
            } else {
              this.tableSizeIncrese = false;
              this.showmessage = false;
            }
          }
          if (this.tableSizeIncrese == false) {
            if (this.user_accept.BookingID) {
              if (this.callPostselectedServer) {
                this.seataguestService.postSpecificServer(this.restID, this.HostessIdValues, this.table_numbers).subscribe((res) => {
                  this.postGetSeated();
                })
              } else {
              this.postGetSeated();
              }
            }
            else {
              if (this.callPostselectedServer) {
                this.seataguestService.postSpecificServer(this.restID, this.HostessIdValues, this.table_numbers).subscribe((res) => {
                  this.postGetSeatedNew();
                })
              } else {
                this.postGetSeatedNew();
              }
              
            }
          } else {
            this.showmessage = true;
            this.error_message = "Too many tables selected for party size"
          }
        }

        /*verify exists for seating */

      }
    }
    }

    choseservers(e: any, server_list: any,indexvalue) {
      console.log(server_list);
      this.popUpServerSelected = true;
        this.currentindex = indexvalue;      
        this.HostessIdValues = server_list.HostessID;
      this.HostessNames = server_list.HostessName;
      this.selectedRow = server_list.HostessName;
    }
  
    selectservers(item:any) {
      this.HostessIdValues = item.HostessID;
      if (this.hostNotSelected == true) {
        this.HostessNames = item.HostessName;
      }
    }
    postselectedserver() {
        this.seataguestService.postSpecificServer(this.restID, this.HostessIdValues, this.table_numbers).subscribe((res) => {
          if (this.hostNotSelected == false) {
            this.getseated(this.restID);
            this.getwaitlist();
            this.getservers();
          } else {
            if (this.restID) {
              this.restID = JSON.parse(this.restID);
            }
            if (this.user_accept.PartySize) {
              this.partysize = JSON.parse(this.user_accept['PartySize']);

            }
            if (this.user_accept.waitquoted) {
              this.QuotedTime = JSON.parse(this.user_accept['waitquoted'])
            }


            //assign multiple server to one server
            if (this.removeDuplicate_servers(this.serverSelectedArray).length > 1) {
              this.seataguestService.getServerwiseDetails(this.restID, this.HostessIdValues).subscribe((res) => {
                console.log(res);
                this.servers_info = res._Data;
              })
              this.tooManyTableCheck = cloneDeep(parseInt(this.user_accept.PartySize));
              for (let i = this.selectedTableType.length - 1; i >= 0; i--) {
                this.tooManyTableCheck -= this.selectedTableType[i];
                if (this.tooManyTableCheck <= 0 && i != 0) {
                  this.tableSizeIncrese = true;
                  this.showmessage = true;
                  this.error_message = "Too many tables selected for party size"
                  return 0;
                } else {
                  this.tableSizeIncrese = false;
                  this.showmessage = false;
                }
              }
              if (this.tableSizeIncrese == false) {
                this.openModal(this.template);
              }
            }
            //assign multiple server to one server end

            else {
              /* get seated now checking */
              if (this.SeatedNowCount > this.TotalSelectable) {
                this.showDialog = !this.showDialog;
                this.getseatednow_count = this.SeatedNowCount - this.TotalSelectable;
                this.commonmessage = "You have selected " + this.getseatednow_count + " table from allocated GetTableNow. Do you want to continue?"
              }
              else {
                this.tooManyTableCheck = cloneDeep(parseInt(this.user_accept.PartySize));
                for (let i = this.selectedTableType.length - 1; i >= 0; i--) {
                  this.tooManyTableCheck -= this.selectedTableType[i];
                  if (this.tooManyTableCheck <= 0 && i != 0) {
                    this.tableSizeIncrese = true;
                    this.showmessage = true;
                    this.error_message = "Too many tables selected for party size"
                    return 0;
                  } else {
                    this.tableSizeIncrese = false;
                    this.showmessage = false;
                  }
                }
                if (this.tableSizeIncrese == false) {
                  if (this.user_accept.BookingID) {
                    this.postGetSeated();
                  }
                  else {
                    this.postGetSeatedNew();
                  }
                } else {
                  this.showmessage = true;
                  this.error_message = "Too many tables selected for party size"
                }
              }

              /*verify exists for seating */

            }
          }   
        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
            })
        this.ngOnInit();
       // this.getseated(this.restID);
        this.modalRef.hide();      
    }

   postServers() {
       this.seataguestService.postSpecificServer(this.restID, this.HostessIdValues,this.table_numbers).subscribe((res) => {
         if (res._ErrorCode == '0') {
           this.popUpServerSelected = false;
               /* get seated now checking */
               if (this.SeatedNowCount > this.TotalSelectable) {
                   this.showDialog = !this.showDialog;
                   this.getseatednow_count = this.SeatedNowCount - this.TotalSelectable;
                   this.commonmessage = "You have selected " + this.getseatednow_count + " table from allocated GetTableNow. Do you want to continue?"
               }
               else {
                 this.tooManyTableCheck = cloneDeep(parseInt(this.user_accept.PartySize));
                 for (let i = this.selectedTableType.length - 1; i >= 0; i--) {
                   this.tooManyTableCheck -= this.selectedTableType[i];
                   if (this.tooManyTableCheck <= 0 && i != 0) {
                     this.tableSizeIncrese = true;
                     this.showmessage = true;
                     this.error_message = "Too many tables selected for party size"
                     return 0;
                   } else {
                     this.tableSizeIncrese = false;
                     this.showDialog = false;
                   }
                 }
                 if (this.tableSizeIncrese == false) {
                   if (this.user_accept.BookingID) {
                     this.postGetSeated();
                   }
                   else {
                     this.postGetSeatedNew();
                   }
                 } else {
                   this.showmessage = true;
                   this.error_message = "Too many tables selected for party size"
                 }               }
            /*verify exists for seating */
           }
       },(err) => {
           if (err === 0) {
               this._toastr.error('network error')
           }
           })     
        this.modalRef.hide();

    }

    //print functionality
    printrow(item) {
      var WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=auto,overflow=hidden,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write('<html><head><title></title><style>*{font-family:arial, sans-serif;}td,th{text-transform:uppercase;color:#000;}</style>');
      WinPrint.document.write('<link rel="stylesheet" href="assets/css/print.css" media="print" type="text/css"/>');
      WinPrint.document.write('</head><body> <h2 style="text-transform:uppercase;font-family:arial, sans-serif;text-align:center;display:block;width:100%;margin:0 0 20px 0;">Receipt</h2>');
      var arr = [
        {
          key: "TRUFL STATUS",
          value: ''
        },
        {
          key: "RESTAURANT NAME",
          value: localStorage.restaurantName
        },
        {
          key: "GUEST NAME",
          value: item.UserName
        },
        {
          key: "PARTY SIZE",
          value: item.PartySize
        },
        { key: "WAIT QUOTED", value: item.QuotedTime },
        //{ key: "TIME QUOTED", value: item.TimeWaited },
        { key: "TRUFL OFFER /RESERVATION", value: item.OfferAmount },
        { key: "THIS VISIT", value: item.ThisVisit },
        { key: "RELATIONSHIP", value: item.Relationship },
        { key: "SEATING AND PREFERENCES", value: item.SeatingPreferences },
        { key: "FOOD AND DRINK PREFERENCES", value: item.FoodAndDrink }
      ];

      WinPrint.document.write('<table style="margin-left: -0%;" width="100%">');
      let selected = this;
      arr.forEach((item) => {
        if (item.key == "undefined" || item.key == "null" || item.key == undefined || item.key == null) {
          item.key = '';
        }
        if (item.value == undefined || item.value == null) {
          item.value = '';
        }
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important; width:140px;">' + item.key + '</th><td  align="left" style="font-size:11px !important;font-weight:400;width:140px;">' + item.value + '</td></tr>');
      })

      WinPrint.document.write('</table>');
      WinPrint.document.write('</body>');
      setTimeout(function () {
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      }, 1000);
      return false;
    }

    Ok() {
        this.showDialog = !this.showDialog;
        if (this.user_accept.BookingID) {
            this.postGetSeated();
        }
        else {
            this.postGetSeatedNew();
        }

        //var table_array = [];
        //var tableType_array = [];
        //var servers_array = [];
        //var serversNames_array = [];
        //var tableNames_array = [];
        //this.selected_objects.forEach((table, index) => {
        //    if (table.TableStatus == true) {
        //        table_array.push(table.TableNumber);
        //        tableType_array.push(table.TableType);
        //        servers_array.push(table.HostessID);
        //        serversNames_array.push(table.HostessName);
        //        tableNames_array.push(table.TableName);
               
        //    }
           
        //})

        //var table_types = tableType_array.join();
        //var table_numbers = table_array.join();
        //var HostessIdValues = this.removeDuplicate_servers(servers_array).join();
        //var HostessNames = this.removeDuplicate_servers(serversNames_array).join();
        //var TableNames = tableNames_array.join();

        //if (this.restID) {
        //    var restID = JSON.parse(this.restID);
        //}
        //if (this.user_accept.PartySize) {
        //    var partysize = JSON.parse(this.user_accept['PartySize']);

        //}
        //if (this.user_accept.waitquoted) {
        //    var QuotedTime = JSON.parse(this.user_accept['waitquoted'])
        //}

        //if (this.getTableType) {
        //    var getTableType = JSON.parse(this.getTableType);
        //}
        //if (this.getseatednow_count) {
        //    var getseatednow_count = JSON.parse(this.getseatednow_count);
        //}

        //update get seated now
        //this.seataguestService.updategetseatednow(restID, getTableType, getseatednow_count).subscribe((res: any) => {
        //    if (res._ErrorCode == '1') {
        //        window.setTimeout(() => {
        //            this._toastr.error(this.error_msg);
        //        }, 500);
        //    }            
        //    else if (res._ErrorCode == '0') {               

        //        if (this.user_accept.BookingID) {
        //            this.seataguestService.verifyuser(this.user_accept.BookingID, this.user_accept.TruflUserID, restID).subscribe((res: any) => {

        //                if (res._ErrorCode == '1') {
        //                    window.setTimeout(() => {
        //                        this._toastr.error(res._Data);
        //                    }, 500);
        //                }
        //                else if (res._ErrorCode == '0') {
        //                    if (this.unique_id == "addguest") {
        //                        var addobj = {
        //                            "RestaurantID": restID,
        //                            "FullName": this.user_accept.UserName,
        //                            "Email": this.user_accept.email,
        //                            "ContactNumber": this.user_accept.mobile,
        //                            "DOB": this.user_accept.DOB,
        //                            "UserType": 'TU',
        //                            "PartySize": partysize,
        //                            "QuotedTime": QuotedTime,
        //                            "Relationship": this.user_accept.relationship,
        //                            "ThisVisit": this.user_accept.visit,
        //                            "FoodAndDrink": this.user_accept.food,
        //                            "SeatingPreferences": this.user_accept.seating,
        //                            "Description": this.user_accept.notes,
        //                            "WaitListTime": null,
        //                            "BookingStatus": 3,
        //                            "TableNumbers": table_numbers,
        //                            "SeatedTableType": table_types,
        //                            "HostessID": HostessIdValues,
        //                            "HostessName": HostessNames,
        //                            "TableName": TableNames,
        //                            "UserName": this.user_accept.UserName,
        //                            "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser  : null 
        //                        }
        //                        this.seataguestService.newguestconfirmation(addobj).subscribe((res: any) => {
        //                            if (res._ErrorCode == '1') {
        //                                window.setTimeout(() => {
        //                                    this._toastr.error(this.error_msg);
        //                                }, 500);
        //                            }
        //                            else if (res._ErrorCode == '50000') {
        //                                this.sharedService.email_error = "Email Id Already Exists";
        //                                this.router.navigate(['addGuest']);
        //                            }
        //                            else if (res._ErrorCode == '0') {
        //                                this.sharedService.email_error = '';
        //                                this.router.navigate(['seated']);
        //                            }
        //                        }, (err) => {
        //                            if (err === 0) {
        //                                this._toastr.error('network error')
        //                            }
        //                        })
        //                    }
        //                    else if (this.unique_id == "edit_guest") {
        //                        var editobject = {
        //                            "RestaurantID": this.user_accept.RestaurantID,
        //                            "TruflUserID": this.user_accept.TruflUserID,
        //                            "FullName": this.user_accept.UserName,
        //                            "Email": this.user_accept.Email,
        //                            "ContactNumber": this.user_accept.PhoneNumber,
        //                            "Relationship": this.user_accept.Relationship,
        //                            "ThisVisit": this.user_accept.ThisVisit,
        //                            "FoodAndDrink": this.user_accept.FoodAndDrinkPreferences,
        //                            "SeatingPreferences": this.user_accept.SeatingPreferences,
        //                            "Description": this.user_accept.Description,
        //                            "BookingID": this.user_accept.BookingID,
        //                            "TableNumbers": table_numbers,
        //                            "SeatedTableType": table_types,
        //                            "HostessID": HostessIdValues,
        //                            "HostessName": HostessNames,
        //                            "TableName": TableNames,
        //                            "UserName": this.user_accept.UserName,
        //                            "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
        //                        }
        //                        this.seataguestService.editguestconfirmation(editobject).subscribe((res: any) => {

        //                            if (res._ErrorCode == '1') {
        //                                window.setTimeout(() => {
        //                                    this._toastr.error(this.error_msg);
        //                                }, 500);
        //                            }
        //                            else if (res._ErrorCode == '50000') {
        //                                this.sharedService.email_error = "Email Id Already Exists";
        //                                this.router.navigate(['editguest']);
        //                                localStorage.setItem('editguestDetails', JSON.stringify(this.user_accept));
        //                            }
        //                            else if (res._ErrorCode == '0') {

        //                                if (this.user_accept.OfferType == '3') {
        //                                    let obj = {
        //                                        TruflUserID: this.user_accept.TruflUserID,
        //                                        RestaurantID: this.user_accept.RestaurantID,
        //                                        BillAmount: 0,
        //                                        RewardType: "SEATED"
        //                                    }

        //                                    this.seataguestService.saverestaurentrewards(obj).subscribe((res) => {
        //                                        if (res._ErrorCode == '1') {
        //                                            window.setTimeout(() => {
        //                                                this._toastr.error(this.error_msg);

        //                                            }, 500);
        //                                        }
        //                                        else if (res._ErrorCode == '0') {
        //                                            this.sharedService.email_error = '';
        //                                            this.router.navigate(['seated']);
        //                                        }

        //                                    }, (err) => {
        //                                        if (err == 0) {
        //                                            this._toastr.error('network error')
        //                                        }
        //                                    })

        //                                }
        //                                else {
        //                                    this.router.navigate(['seated']);
        //                                }

        //                            }
        //                        }, (err) => {
        //                            if (err === 0) {
        //                                this._toastr.error('network error')
        //                            }
        //                        })
        //                    }

        //                    else if (this.unique_id == "notify") {

        //                        let obj = {
        //                            "BookingID": this.user_accept.BookingID,
        //                            "TableNumbers": table_numbers,
        //                            "SeatedTableType": table_types,
        //                            "HostessID": HostessIdValues,
        //                            "HostessName": HostessNames,
        //                            "TableName": TableNames,
        //                            "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
        //                        }


        //                        this.seataguestService.UpdateWaitListSeated(obj).subscribe((res: any) => {

        //                            if (res._ErrorCode == '1') {
        //                                window.setTimeout(() => {
        //                                    this._toastr.error(this.error_msg);
        //                                }, 500);
        //                            }
        //                            else if (res._ErrorCode == '0') {
        //                                this.router.navigate(['seated']);
        //                            }

        //                        }, (err) => {
        //                            if (err === 0) {
        //                                this._toastr.error('network error')
        //                            }
        //                        })
        //                    }
        //                    else if (this.unique_id == "accept_offer") {
        //                        let obj = {
        //                            "BookingID": this.user_accept.BookingID,
        //                            "TableNumbers": table_numbers,
        //                            "SeatedTableType": table_types,
        //                            "HostessID": HostessIdValues,
        //                            "HostessName": HostessNames,
        //                            "TableName": TableNames,
        //                            "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
        //                        }
        //                        this.seataguestService.UpdateWaitListSeated(obj).subscribe((res: any) => {


        //                            if (res._ErrorCode == '1') {
        //                                window.setTimeout(() => {
        //                                    this._toastr.error(this.error_msg);

        //                                }, 500);
        //                            }
        //                            else if (res._ErrorCode == '0') {

        //                                if (this.user_accept.OfferType == '3') {
        //                                    let obj = {
        //                                        TruflUserID: this.user_accept.TruflUserID,
        //                                        RestaurantID: this.user_accept.RestaurantID,
        //                                        BillAmount: 0,
        //                                        RewardType: "SEATED"
        //                                    }
        //                                    this.seataguestService.saverestaurentrewards(obj).subscribe((res) => {
        //                                        if (res._ErrorCode == '1') {
        //                                            window.setTimeout(() => {
        //                                                this._toastr.error(this.error_msg);

        //                                            }, 500);
        //                                        }
        //                                        else if (res._ErrorCode == '0') {
        //                                            this.router.navigate(['seated']);
        //                                        }

        //                                    }, (err) => {
        //                                        if (err == 0) {
        //                                            this._toastr.error('network error')
        //                                        }
        //                                    })

        //                                }
        //                                else {
        //                                    this.router.navigate(['seated']);
        //                                }
        //                            }

        //                        }, (err) => {
        //                            if (err === 0) {
        //                                this._toastr.error('network error')
        //                            }
        //                        })

        //                    }
        //                    else if (this.unique_id == "accept_offersidenav") {
        //                        let obj = {
        //                            "BookingID": this.user_accept.BookingID,
        //                            "TableNumbers": table_numbers,
        //                            "SeatedTableType": table_types,
        //                            "HostessID": HostessIdValues,
        //                            "HostessName": HostessNames,
        //                            "TableName": TableNames,
        //                            "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
        //                        }
        //                        this.seataguestService.UpdateWaitListSeated(obj).subscribe((res: any) => {

        //                            if (res._ErrorCode == '1') {
        //                                window.setTimeout(() => {
        //                                    this._toastr.error(this.error_msg);

        //                                }, 500);
        //                            }
        //                            else if (res._ErrorCode == '0') {
        //                                this.router.navigate(['seated']);
        //                            }
        //                        }, (err) => {
        //                            if (err === 0) {
        //                                this._toastr.error('network error')
        //                            }
        //                        })

        //                    }
        //                    // move to seataguest to select seats from sidenav
        //                    else if (this.unique_id == "tables_sidenav") {

        //                        let obj = {
        //                            "BookingID": this.user_accept.BookingID,
        //                            "TableNumbers": table_numbers,
        //                            "SeatedTableType": table_types,
        //                            "HostessID": HostessIdValues,
        //                            "HostessName": HostessNames,
        //                            "TableName": TableNames,
        //                            "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
        //                        }

        //                        this.seataguestService.UpdateWaitListSeated(obj).subscribe((res: any) => {

        //                            if (res._ErrorCode == '1') {
        //                                window.setTimeout(() => {
        //                                    this._toastr.error(this.error_msg);

        //                                }, 500);
        //                            }
        //                            else if (res._ErrorCode == '0') {
        //                                if (this.user_accept.OfferType == '3') {
        //                                    let obj = {
        //                                        TruflUserID: this.user_accept.TruflUserID,
        //                                        RestaurantID: this.user_accept.RestaurantID,
        //                                        BillAmount: 0,
        //                                        RewardType: "SEATED"
        //                                    }

        //                                    this.seataguestService.saverestaurentrewards(obj).subscribe((res) => {
        //                                        if (res._ErrorCode == '1') {
        //                                            window.setTimeout(() => {
        //                                                this._toastr.error(this.error_msg);

        //                                            }, 500);
        //                                        }
        //                                        else if (res._ErrorCode == '0') {
        //                                            this.router.navigate(['seated']);
        //                                        }

        //                                    }, (err) => {
        //                                        if (err == 0) {
        //                                            this._toastr.error('network error')
        //                                        }
        //                                    })
        //                                }

        //                                else {
        //                                    this.router.navigate(['seated']);
        //                                }
        //                            }

        //                        }, (err) => {
        //                            if (err === 0) {
        //                                this._toastr.error('network error')
        //                            }
        //                        })

        //                    }
        //                }

        //            }, (err) => {
        //                if (err === 0) {
        //                    this._toastr.error('network error')
        //                }
        //            })

        //            /*verify exists for seating  end*/
        //        }


        //        else {

        //            if (this.unique_id == "addguest") {
        //                var addobj = {
        //                    "RestaurantID": restID,
        //                    "FullName": this.user_accept.UserName,
        //                    "Email": this.user_accept.email,
        //                    "ContactNumber": this.user_accept.mobile,
        //                    "DOB": this.user_accept.DOB,
        //                    "UserType": 'TU',
        //                    "PartySize": partysize,
        //                    "QuotedTime": QuotedTime,
        //                    "Relationship": this.user_accept.relationship,
        //                    "ThisVisit": this.user_accept.visit,
        //                    "FoodAndDrink": this.user_accept.food,
        //                    "SeatingPreferences": this.user_accept.seating,
        //                    "Description": this.user_accept.notes,
        //                    "WaitListTime": null,
        //                    "BookingStatus": 3,
        //                    "TableNumbers": table_numbers,
        //                    "SeatedTableType": table_types,
        //                    "HostessID": HostessIdValues,
        //                    "HostessName": HostessNames,
        //                    "TableName": TableNames,
        //                    "UserName": this.user_accept.UserName,
        //                    "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
        //                }
        //                this.seataguestService.newguestconfirmation(addobj).subscribe((res: any) => {
        //                    if (res._ErrorCode == '1') {
        //                        window.setTimeout(() => {
        //                            this._toastr.error(this.error_msg);

        //                        }, 500);
        //                    }

        //                    else if (res._ErrorCode == '50000') {
        //                        this.sharedService.email_error = "Email Id Already Exists";
        //                        this.router.navigate(['addGuest']);
        //                    }
        //                    else if (res._ErrorCode == '0') {
        //                        this.sharedService.email_error = '';
        //                        this.router.navigate(['seated']);
        //                    }
        //                }, (err) => {
        //                    if (err === 0) {
        //                        this._toastr.error('network error')
        //                    }
        //                })
        //            }

        //        }

        //    }
        //}, (err) => {
        //    if (err === 0) {
        //        this._toastr.error('network error')
        //    }
        //})

    }

    Cancel() {
        this.showDialog = !this.showDialog;
    }

   public postGetSeated() {

   this.seataguestService.verifyuser(this.user_accept.BookingID, this.user_accept.TruflUserID, this.restID).subscribe((res: any) => {
        if (res._ErrorCode == '1') {
            window.setTimeout(() => {
              this._toastr.error(res._StatusMessage);
              }, 500);
         }
    else if (res._ErrorCode == '0') {
         if (this.unique_id == "addguest") {
         var addobj = {
                   "RestaurantID": this.restID,
                   "FullName": this.user_accept.UserName,
                   "Email": this.user_accept.email,
                   "ContactNumber": this.user_accept.mobile,
                   "DOB": this.user_accept.DOB,
                   "UserType": 'TU',
                   "PartySize": this.partysize,
                   "QuotedTime": this.QuotedTime,
                   "Relationship": this.user_accept.relationship,
                   "ThisVisit": this.user_accept.visit,
                   "FoodAndDrink": this.user_accept.food,
                   "SeatingPreferences": this.user_accept.seating,
                   "Description": this.user_accept.notes,
                   "WaitListTime": null,
                   "BookingStatus": 3,
                   "TableNumbers": this.table_numbers,
                   "SeatedTableType": this.table_types,
                   "HostessID": this.HostessIdValues,
                   "HostessName":this.HostessNames,
                   "TableName":this.TableNames,
                   "UserName": this.user_accept.UserName,
                   "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 

               }
    this.seataguestService.newguestconfirmation(addobj).subscribe((res: any) => {
              if (res._ErrorCode == '1') {
                      window.setTimeout(() => {
                      this._toastr.error(this.error_msg);
                }, 500);
                 }
               else if (res._ErrorCode == '50000') {
               this.sharedService.email_error = "Email Id Already Exists";
               this.router.navigate(['addGuest']);
               }
              else if (res._ErrorCode == '0') {
               this.sharedService.email_error = '';
               this.router.navigate(['seated']);
               }
               }, (err) => {
              if (err === 0) {
              this._toastr.error('network error')
                }
                })
               this.printrow(addobj);
                }
                else if (this.unique_id == "edit_guest") {
                    var editobject = {
                        "RestaurantID": this.user_accept.RestaurantID,
                        "TruflUserID": this.user_accept.TruflUserID,
                        "FullName": this.user_accept.UserName,
                        "Email": this.user_accept.Email,
                        "PartySize": this.partysize,
                        "QuotedTime":this.QuotedTime,
                        "ContactNumber": this.user_accept.PhoneNumber,
                        "Relationship": this.user_accept.Relationship,
                        "ThisVisit": this.user_accept.ThisVisit,
                        "WaitListTime": null,
                        "FoodAndDrink": this.user_accept.FoodAndDrinkPreferences,
                        "SeatingPreferences": this.user_accept.SeatingPreferences,
                        "Description": this.user_accept.Description,
                        "BookingID": this.user_accept.BookingID,
                        "TableNumbers": this.table_numbers,
                        "SeatedTableType": this.table_types,
                        "HostessID":this. HostessIdValues,
                        "HostessName": this.HostessNames,
                        "TableName": this.TableNames,
                        "UserName": this.user_accept.UserName,
                        "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
                    }
               this.seataguestService.editguestconfirmation(editobject).subscribe((res: any) => {

                  if (res._ErrorCode == '1') {
                      window.setTimeout(() => {
                            this._toastr.error(this.error_msg);
                            }, 500);
                        }
                        else if (res._ErrorCode == '50000') {
                            this.sharedService.email_error = "Email Id Already Exists";
                            this.router.navigate(['editguest']);
                            localStorage.setItem('editguestDetails', JSON.stringify(this.user_accept));
                        }
                       else if (res._ErrorCode == '0') {

                       if (this.user_accept.OfferType == '3') {
                           let obj = {
                             TruflUserID: this.user_accept.TruflUserID,
                             RestaurantID: this.user_accept.RestaurantID,
                             BillAmount: 0,
                             RewardType: "SEATED"
                           }

                        this.seataguestService.saverestaurentrewards(obj).subscribe((res) => {
                          if (res._ErrorCode == '1') {
                              window.setTimeout(() => {
                              this._toastr.error(this.error_msg);

                                }, 500);
                            }
                            else if (res._ErrorCode == '0') {
                            this.sharedService.email_error = '';
                            this.router.navigate(['seated']);
                          }

                           }, (err) => {
                               if (err == 0) {
                            this._toastr.error('network error')
                             }
                           })

                            }
                          else {
                                this.router.navigate(['seated']);
                            }

                        }
                    }, (err) => {
                        if (err === 0) {
                            this._toastr.error('network error')
                        }
                    })
                    this.printrow(editobject);
                }

                else if (this.unique_id == "notify") {
                    let obj = {
                        "BookingID": this.user_accept.BookingID,
                        "TableNumbers":this.table_numbers,
                        "SeatedTableType": this.table_types,
                        "HostessID": this.HostessIdValues,
                        "HostessName": this.HostessNames,
                        "FloorNumber": this.selected_objects[0].FloorNumber,
                        "TableName": this.TableNames,
                        "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
                    }

                    this.seataguestService.UpdateWaitListSeated(obj).subscribe((res: any) => {

                        if (res._ErrorCode == '1') {
                            window.setTimeout(() => {
                                this._toastr.error(this.error_msg);
                            }, 500);
                        }
                        else if (res._ErrorCode == '0') {
                            this.router.navigate(['seated']);
                        }

                    }, (err) => {
                        if (err === 0) {
                            this._toastr.error('network error')
                        }
                    })
                }
                else if (this.unique_id == "accept_offer") {

                    let obj = {
                        "RestaurantID": this.user_accept.RestaurantID,
                        "TruflUserID": this.user_accept.TruflUserID,
                        "FullName": this.user_accept.UserName,
                        "Email": this.user_accept.Email,
                        "FloorNumber": this.selected_objects[0].FloorNumber,
                        "PartySize":this.partysize,
                        "QuotedTime": this.user_accept.Quoted,
                        "ContactNumber": this.user_accept.PhoneNumber,
                        "Relationship": this.user_accept.Relationship,
                        "ThisVisit": this.user_accept.ThisVisit,
                        "WaitListTime": null,
                        "FoodAndDrink": this.user_accept.FoodAndDrinkPreferences,
                        "SeatingPreferences": this.user_accept.SeatingPreferences,
                        "Description": this.user_accept.Description,
                        "BookingID": this.user_accept.BookingID,
                        "TableNumbers": this.table_numbers,
                        "SeatedTableType":this.table_types,
                        "HostessID": this.HostessIdValues,
                        "HostessName":this.HostessNames,
                        "TableName": this.TableNames,
                        "UserName": this.user_accept.UserName,
                        "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 

           }
           console.log('seated')
                    console.log(obj);
                    this.seataguestService.UpdateWaitListSeated(obj).subscribe((res: any) => {

                        if (res._ErrorCode == '1') {
                            window.setTimeout(() => {
                                this._toastr.error(this.error_msg);

                            }, 500);
                        }
                        else if (res._ErrorCode == '0') {

                            if (this.user_accept.OfferType == '3') {
                                let obj = {
                                    TruflUserID: this.user_accept.TruflUserID,
                                    RestaurantID: this.user_accept.RestaurantID,
                                    BillAmount: 0,
                                    RewardType: "SEATED"
                                }
                                this.seataguestService.saverestaurentrewards(obj).subscribe((res) => {
                                    if (res._ErrorCode == '1') {
                                        window.setTimeout(() => {
                                            this._toastr.error(this.error_msg);

                                        }, 500);
                                    }
                                    else if (res._ErrorCode == '0') {
                                        this.router.navigate(['seated']);
                                    }

                                }, (err) => {
                                    if (err == 0) {
                                        this._toastr.error('network error')
                                    }
                                })

                            }
                            else {
                                this.router.navigate(['seated']);
                            }
                        }

                    }, (err) => {
                        if (err === 0) {
                            this._toastr.error('network error')
                        }
                    })
                    this.printrow(obj);
                }
                else if (this.unique_id == "accept_offersidenav") {
                    let obj = {
                        "BookingID": this.user_accept.BookingID,
                        "TableNumbers":this.table_numbers,
                        "SeatedTableType":this.table_types,
                        "HostessID": this.HostessIdValues,
                        "FloorNumber": this.selected_objects[0].FloorNumber,
                        "HostessName":this.HostessNames,
                        "TableName": this.TableNames,
                        "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
                    }
                    this.seataguestService.UpdateWaitListSeated(obj).subscribe((res: any) => {

                        if (res._ErrorCode == '1') {
                            window.setTimeout(() => {
                                this._toastr.error(this.error_msg);

                            }, 500);
                        }
                        else if (res._ErrorCode == '0') {
                            this.router.navigate(['seated']);
                        }
                    }, (err) => {
                        if (err === 0) {
                            this._toastr.error('network error')
                        }
                    })

                }
                // move to seataguest to select seats from sidenav
                else if (this.unique_id == "tables_sidenav") {

                    let obj = {
                        "BookingID": this.user_accept.BookingID,
                        "TableNumbers": this.table_numbers,
                        "FloorNumber": this.selected_objects[0].FloorNumber,
                        "SeatedTableType":this.table_types,
                        "HostessID": this.HostessIdValues,
                        "HostessName":this.HostessNames,
                        "TableName": this.TableNames,
                        "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
                    }

                    this.seataguestService.UpdateWaitListSeated(obj).subscribe((res: any) => {

                        if (res._ErrorCode == '1') {
                            window.setTimeout(() => {
                                this._toastr.error(this.error_msg);

                            }, 500);
                        }
                        else if (res._ErrorCode == '0') {
                            if (this.user_accept.OfferType == '3') {
                                let obj = {
                                    TruflUserID: this.user_accept.TruflUserID,
                                    RestaurantID: this.user_accept.RestaurantID,
                                    BillAmount: 0,
                                    RewardType: "SEATED"
                                }

                                this.seataguestService.saverestaurentrewards(obj).subscribe((res) => {
                                    if (res._ErrorCode == '1') {
                                        window.setTimeout(() => {
                                            this._toastr.error(this.error_msg);

                                        }, 500);
                                    }
                                    else if (res._ErrorCode == '0') {
                                        this.router.navigate(['seated']);
                                    }

                                }, (err) => {
                                    if (err == 0) {
                                        this._toastr.error('network error')
                                    }
                                })
                            }

                            else {
                                this.router.navigate(['seated']);
                            }
                        }

                    }, (err) => {
                        if (err === 0) {
                            this._toastr.error('network error')
                        }
                    })

                }
            }

        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        })
                /*verify exists for seating  end*/

    }
    public postGetSeatedNew() {
        if (this.unique_id == "addguest") {
            var addobj = {
                "RestaurantID":this.restID,
                "FullName": this.user_accept.UserName,
                "Email": this.user_accept.email,
                "ContactNumber": this.user_accept.mobile,
                "DOB": this.user_accept.DOB,
                "UserType": 'TU',
                "PartySize": this.partysize,
                "QuotedTime":this.QuotedTime,
                "Relationship": this.user_accept.relationship,
                "ThisVisit": this.user_accept.visit,
                "FoodAndDrink": this.user_accept.food,
                "SeatingPreferences": this.user_accept.seating,
                "Description": this.user_accept.notes,
                "WaitListTime": null,
                "BookingStatus": 3,
                "TableNumbers": this.table_numbers,
                "SeatedTableType":this.table_types,
                "HostessID": this.HostessIdValues,
                "HostessName": this.HostessNames,
                "TableName":this.TableNames,
                "UserName": this.user_accept.UserName,
                "RestaurantAdminID": this.getrowData.OfferType != 3 ? this.LoggedInUser : null 
            }
            this.seataguestService.newguestconfirmation(addobj).subscribe((res: any) => {
                if (res._ErrorCode == '1') {
                    window.setTimeout(() => {
                        this._toastr.error(this.error_msg);

                    }, 500);
                }

                else if (res._ErrorCode == '50000') {
                    this.sharedService.email_error = "Email Id Already Exists";
                    this.router.navigate(['addGuest']);
                }
                else if (res._ErrorCode == '0') {
                    this.sharedService.email_error = '';
                    this.router.navigate(['seated']);
                }
            }, (err) => {
                if (err === 0) {
                    this._toastr.error('network error')
                }
            })
            this.printrow(addobj);
        }

    }
    /*reassign severs model*/
    public openModal(template) {
        this.modalRef = this.modalService.show(template); // {3}
    }
    dismissmodal() {
        this.modalRef.hide();
    }

    createRange(number) {
        var items: number[] = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }

    showServerPanel() {
       // this.showPanel = true;
        //  this.issideOpen = false;
        this.getServerFlyOut = false;
    }
   /*reassign severs model end*/
    }







        




