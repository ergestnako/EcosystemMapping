export class OrganizationService{
    constructor(API,$log,$localStorage){
        'ngInject';

        //
        this.API =API;
        this.$log = $log;
        this.$localStorage = $localStorage;
    }


      //getting all organizations
    getAll(){
      this.API.all('organizations').get('').
      then((response)=>{
        this.organisationData =response.message;
        this.$log.log(this.organisationData);
      });
    }


      //getting one organization
    getOne(id){
      this.API.one('organizations',id).get('').
      then((response)=>{
        this.organisationOne = response.data;
      });

    }


    // creating an organisation
    createOrganisation(data){
        this.API.all('organizations').post(data).then(
            (response) => {
                this.$log.log(response.data);
                this.$log.log("organisation created successifully ");
            }
        );
    }

    // creating a new location
    createLocation(data){
        this.API.all('locations').post(data).then(
            (response) => {
                this.$log.log(response.data);
                this.$log.log("A location has been created succefully");
            }
        );
    }


        // gets all sectors
    getSectors(){
      return  this.API.all('sectors').get('');

    }


    // gets all roles
    getRoles(){
        return  this.API.all('roles').get('');

    }


    // gets all stages
    getStages(){
        return  this.API.all('stages').get('');

    }

    getRoleCount(roleName){
      let roleData = [];
        angular.forEach(this.$localStorage.organisations.data,(org)=>{
            angular.forEach(org.roles,(roleArray)=>{
                angular.forEach(roleArray,(role)=>{
                    if(role.name == roleName){
                      roleData.push(role.name);
                    }
                })
            })
        });

        return roleData.length;
    }

    getStage(){

    }
}
