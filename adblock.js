const exactSiteList = require("./sitelists/exact.js");
const includeSiteList = require("./sitelists/include.js");

class adblock{
    constructor(useBuiltInList = true, getLatestListFromGithub = true){
        this.sitesExact = []
        this.sitesInclude = []
        if(useBuiltInList){
            this.sitesExact = exactSiteList
            this.sitesInclude = includeSiteList
        }
    }
    addSite(site, mode="exact"/*include*/){
        if(mode==="exact"){
            this.sitesExact.push(site)
        }else if(mode==="include"){
            this.sitesInclude.push(site)
        }else{
            throw new Error("Could not add site to site list type: "+mode)
        }
    }
    test(site, mode){
        if(!mode||mode==="exact"){
            if(this.sitesExact.includes(site)){
                return true
            }
        }
        if(!mode||mode==="include"){
            for(let includeSite of this.sitesInclude){
                if(site.includes(includeSite)){
                    return true
                }
            }
        }
        return false
    }
}

module.exports = adblock