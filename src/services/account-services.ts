import {Injectable} from '@angular/core';

@Injectable()

export class AccountServices{
    
    constructor(){
        console.log('Im Account services')
    }

    getClaimsList(){
        return claimsList['result']['claims'];
    }
    
    getBillingData(){
        return billingData['result'];
    }

    setAccountDetails(accntId,accntObj){
        accntObj[accntId]=accntObj;
    }

    getAccountDetails(accntId){
        return accntObj[accntId];
    }

    getAccntData():{accounts:Array<object>}{
        return {
            accounts:accntData['result']['accounts'],
        }
    }

    getClaimsDetailsData() {
        return claimsDetails['result'];
    }

}
let accntObj:object={};
let claimsList={"id":"b0c7e3e4-e096-49ad-8ed5-485e82a65c40","result":{"maxNumberOfResults":2,"claims":[{"state":"Draft","product":"Businessowners","stateCode":"draft","totalPayments":{"currency":"usd","amount":0.00},"totalIncurredNet":{"currency":"usd","amount":0.00},"lineOfBusinessCode":"BOPLine","claimNumber":"999-99-999101","policyNumber":"2025823028","insuredName":"John Doe Inc","dateOfLoss":"2019-03-30T04:01:00Z","accountNumber":"3434921087","isPersonalAccount":false},{"state":"Open","product":"Businessowners","stateCode":"open","totalPayments":{"currency":"usd","amount":0.00},"totalIncurredNet":{"currency":"usd","amount":0.00},"lineOfBusinessCode":"BOPLine","claimNumber":"000-00-000003","policyNumber":"2025823028","insuredName":"John Doe Inc","dateOfLoss":"2019-03-29T14:00:00Z","accountNumber":"3434921087","isPersonalAccount":false}]},"jsonrpc":"2.0"};
let accntData={"id":"13bd7886-ea48-41ea-bfd6-64f4270eb695","result":{"maxNumberOfResults":3,"accounts":[{"producerCodes":["\n  (AccountProducerCode) {ID=306, BeanVersion=0, Account=308, ArchivePartition=null, CreateTime=Fri Mar 29 07:17:59 EDT 2019, CreateUser=298, FrozenSet=null, ProducerCode=77, PublicID=pc:306, RetiredValue=0, UpdateTime=Fri Mar 29 07:17:59 EDT 2019, UpdateUser=298}"],"accountCreatedDate":"2019-03-29T11:17:59Z","policySummaries":[{"expiration":"2019-09-29T04:01:00Z","primaryInsuredName":"Bhanu Singh","policyNumber":"6200379187","product":{"publicID":"PersonalAuto","productCode":"PersonalAuto","productName":"Personal Auto"},"premium":{"currency":"usd","amount":489.00},"producerCodeOfService":"301-008573","accountNumber":"5828154954","accountHolder":{"displayName":"Bhanu Singh","publicID":"pc:1210","subtype":"Person","contactName":"Bhanu Singh","primaryAddress":{"state":"OH","country":"US","displayName":"1800 halleck pl, Columbus, OH 43209","publicID":"pc:1322","city":"Columbus","postalCode":"43209","addressLine1":"1800 halleck pl","addressType":"home"},"emailAddress1":"bhanusingh@gmail.com","accountHolder":true,"homeNumber":"2010202111","gender":"M","primaryPhoneType":"home","dateOfBirth":{"month":1,"year":1980,"day":5},"firstName":"Bhanu","lastName":"Singh","licenseNumber":"OH123456","licenseState":"OH","additionalAddresses":[{"state":"OH","country":"US","displayName":"1800 halleck pl, Columbus, OH 43209","publicID":"pc:1326","city":"Columbus","postalCode":"43209","addressLine1":"1800 halleck pl","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"PersonalAutoLine","lineOfBusinessName":"Personal Auto Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-29T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Bhanu Singh","producerCodeOfRecord":"301-008573"}],"numberOfOpenActivities":0,"isPersonalAccount":true,"accountNumber":"5828154954","accountHolder":"Bhanu Singh","createdByMe":true,"accountHolderAddress":{"state":"OH","country":"US","displayName":"1800 halleck pl, Columbus, OH 43209","publicID":"pc:1322","city":"Columbus","postalCode":"43209","addressLine1":"1800 halleck pl","addressType":"home"},"isCommercialAccount":false},{"producerCodes":["\n  (AccountProducerCode) {ID=305, BeanVersion=0, Account=307, ArchivePartition=null, CreateTime=Fri Mar 29 07:07:42 EDT 2019, CreateUser=298, FrozenSet=null, ProducerCode=77, PublicID=pc:305, RetiredValue=0, UpdateTime=Fri Mar 29 07:07:42 EDT 2019, UpdateUser=298}"],"accountCreatedDate":"2019-03-29T11:07:42Z","policySummaries":[{"expiration":"2019-09-29T04:01:00Z","primaryInsuredName":"Test Smoke","policyNumber":"5892661185","product":{"publicID":"PersonalAuto","productCode":"PersonalAuto","productName":"Personal Auto"},"premium":{"currency":"usd","amount":205.00},"producerCodeOfService":"301-008573","accountNumber":"3537321588","accountHolder":{"displayName":"Test Smoke","publicID":"pc:1209","subtype":"Person","contactName":"Test Smoke","primaryAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, Tuscon, AZ 85710","publicID":"pc:1320","city":"Tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"emailAddress1":"Test@test.com","accountHolder":true,"homeNumber":"5634754736","gender":"M","primaryPhoneType":"home","dateOfBirth":{"month":11,"year":2008,"day":28},"firstName":"Test","lastName":"Smoke","licenseNumber":"A12345678","licenseState":"AZ","additionalAddresses":[{"state":"AZ","country":"US","displayName":"7471 E Random R, Tuscon, AZ 85710","publicID":"pc:1324","city":"Tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"PersonalAutoLine","lineOfBusinessName":"Personal Auto Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-29T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Test Smoke","producerCodeOfRecord":"301-008573"}],"numberOfOpenActivities":0,"isPersonalAccount":true,"accountNumber":"3537321588","accountHolder":"Test Smoke","createdByMe":true,"accountHolderAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, Tuscon, AZ 85710","publicID":"pc:1320","city":"Tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"isCommercialAccount":false},{"producerCodes":["\n  (AccountProducerCode) {ID=303, BeanVersion=0, Account=305, ArchivePartition=null, CreateTime=Thu Mar 28 04:49:40 EDT 2019, CreateUser=298, FrozenSet=null, ProducerCode=77, PublicID=pc:303, RetiredValue=0, UpdateTime=Thu Mar 28 04:49:40 EDT 2019, UpdateUser=298}"],"accountCreatedDate":"2019-03-28T08:49:40Z","policySummaries":[{"expiration":"2020-03-29T04:01:00Z","primaryInsuredName":"Test Account","policyNumber":"8614792923","product":{"publicID":"BusinessOwners","productCode":"BusinessOwners","productName":"Businessowners"},"premium":{"currency":"usd","amount":553.00},"producerCodeOfService":"301-008573","accountNumber":"9309304923","accountHolder":{"displayName":"Test Account","publicID":"pc:1207","subtype":"Person","contactName":"Test Account","primaryAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1310","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"emailAddress1":"Test@Mail.com","accountHolder":true,"homeNumber":"3535353535","primaryPhoneType":"home","dateOfBirth":{"month":2,"year":2000,"day":26},"firstName":"Test","lastName":"Account","licenseNumber":"A12345678","licenseState":"AZ","additionalAddresses":[{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1312","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"BOPLine","lineOfBusinessName":"Businessowners Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-29T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Test Account","producerCodeOfRecord":"301-008573"},{"expiration":"2020-03-28T04:01:00Z","primaryInsuredName":"Test Account","policyNumber":"0312989540","product":{"publicID":"BusinessOwners","productCode":"BusinessOwners","productName":"Businessowners"},"premium":{"currency":"usd","amount":442.00},"producerCodeOfService":"301-008573","accountNumber":"9309304923","accountHolder":{"displayName":"Test Account","publicID":"pc:1207","subtype":"Person","contactName":"Test Account","primaryAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1310","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"emailAddress1":"Test@Mail.com","accountHolder":true,"homeNumber":"3535353535","primaryPhoneType":"home","dateOfBirth":{"month":2,"year":2000,"day":26},"firstName":"Test","lastName":"Account","licenseNumber":"A12345678","licenseState":"AZ","additionalAddresses":[{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1312","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"BOPLine","lineOfBusinessName":"Businessowners Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-28T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Test Account","producerCodeOfRecord":"301-008573"},{"expiration":"2019-09-28T04:01:00Z","primaryInsuredName":"Test Account","policyNumber":"6931922362","product":{"publicID":"PersonalAuto","productCode":"PersonalAuto","productName":"Personal Auto"},"premium":{"currency":"usd","amount":205.00},"producerCodeOfService":"301-008573","accountNumber":"9309304923","accountHolder":{"displayName":"Test Account","publicID":"pc:1207","subtype":"Person","contactName":"Test Account","primaryAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1310","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"emailAddress1":"Test@Mail.com","accountHolder":true,"homeNumber":"3535353535","primaryPhoneType":"home","dateOfBirth":{"month":2,"year":2000,"day":26},"firstName":"Test","lastName":"Account","licenseNumber":"A12345678","licenseState":"AZ","additionalAddresses":[{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1312","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"PersonalAutoLine","lineOfBusinessName":"Personal Auto Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-28T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Test Account","producerCodeOfRecord":"301-008573"}],"numberOfOpenActivities":0,"isPersonalAccount":true,"accountNumber":"9309304923","accountHolder":"Test Account","createdByMe":true,"accountHolderAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1310","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"isCommercialAccount":false}]},"jsonrpc":"2.0"}
let billingData={"id":"395fe480-a13a-48d7-8f44-620626db1b3d","result":{"ownedPolicies":[{"pastDueAmount":{"amount":2000,"currency":"usd"},"canUserView":true,"billedAmount":{"amount":4000,"currency":"usd"},"totalCost":{"amount":459.00,"currency":"usd"},"totalPremium":{"amount":435.00,"currency":"usd"},"unbilledAmount":{"amount":1000,"currency":"usd"},"isDelinquent":true,"taxesAndFees":{"amount":24.00,"currency":"usd"}},{"pastDueAmount":{"amount":2000,"currency":"usd"},"canUserView":true,"billedAmount":{"amount":4000,"currency":"usd"},"totalCost":{"amount":459.00,"currency":"usd"},"totalPremium":{"amount":435.00,"currency":"usd"},"unbilledAmount":{"amount":1000,"currency":"usd"},"isDelinquent":false,"taxesAndFees":{"amount":24.00,"currency":"usd"}}],"currentDue":{"amount":0,"currency":"usd"},"totalDue":{"amount":0,"currency":"usd"},"unbilled":{"amount":3000,"currency":"usd"},"pastDue":{"amount":0,"currency":"usd"},"unownedPolicies":[{"pastDueAmount":{"amount":2000,"currency":"usd"},"canUserView":true,"billedAmount":{"amount":4000,"currency":"usd"},"totalCost":{"amount":216.00,"currency":"usd"},"totalPremium":{"amount":205.00,"currency":"usd"},"unbilledAmount":{"amount":1000,"currency":"usd"},"isDelinquent":true,"taxesAndFees":{"amount":11.00,"currency":"usd"}}]},"jsonrpc":"2.0"};
let claimsDetails={"id":"fda71dd1-1f88-425b-b037-7776d36bfc0d","result":{"policy":{"status":"In force","publicID":"cc:1","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z","coverages":[{"name":"Special Coverage Packages","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z"},{"name":"Employee Dishonesty","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z","incidentLimit":{"currency":"usd","amount":5000.00}},{"name":"Policywide Property Deductible","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z"},{"name":"Hired Auto","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z"},{"name":"Non-owned Auto Liability","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z"},{"name":"Tenants Fire Liability","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z","incidentLimit":{"currency":"usd","amount":50000.00}},{"name":"Liability","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z","incidentLimit":{"currency":"usd","amount":300000.00}},{"name":"Premises Medical Expense","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z","exposureLimit":{"currency":"usd","amount":5000.00}},{"name":"Personal and Advertising Injury","expirationDate":"2020-03-29T04:01:00Z","effectiveDate":"2019-03-29T04:01:00Z"}],"policyNumber":"2025823028","accountNumber":"3434921087","policyType":"BusinessOwners","lobs":{}},"description":"test desc","publicID":"cc:2","mainContact":{"displayName":"John Doe","publicID":"cc:505","primaryAddress":{"state":"IA","country":"US","displayName":"Waukee, IA","publicID":"cc:204","city":"Waukee","addressType":"home"},"cellNumber":"5157241915","primaryPhoneType":"work","subtype":"Person","lastName":"Doe","firstName":"John","contactType":"Person"},"totalPayments":{"currency":"usd","amount":0.00},"addresses":[{"state":"IA","country":"US","displayName":"1440 SE Bishop Drive, Waukee, IA 50263","publicID":"cc:202","city":"Waukee","addressLine1":"1440 SE Bishop Drive","postalCode":"50263","addressType":"billing"},{"state":"IA","country":"US","displayName":"1440 SE Bishop Drive, Waukee, IA 50263","publicID":"cc:203","city":"Waukee","addressLine1":"1440 SE Bishop Drive","postalCode":"50263","addressType":"business"}],"lossLocation":{"state":"IA","country":"US","displayName":"1440 SE Bishop Drive, Waukee, IA 50263","publicID":"cc:202","city":"Waukee","addressLine1":"1440 SE Bishop Drive","postalCode":"50263","addressType":"billing"},"checks":[],"lossCause":"broken_glass","documents":[],"relatedContacts":[{"displayName":"","publicID":"cc:503","primaryAddress":{"country":"US","displayName":"","publicID":"cc:201"},"subtype":"Company","contactType":"Company"},{"displayName":"Portal User","publicID":"cc:403","subtype":"UserContact","lastName":"User","firstName":"Portal","contactType":"UserContact"},{"displayName":"John Doe Inc","publicID":"cc:504","primaryAddress":{"state":"IA","country":"US","displayName":"1440 SE Bishop Drive, Waukee, IA 50263","publicID":"cc:203","city":"Waukee","addressLine1":"1440 SE Bishop Drive","postalCode":"50263","addressType":"business"},"policyRole":"insured","primaryPhoneType":"work","emailAddress1":"johndoe@mailinator.com","subtype":"Company","contactType":"Company","contactName":"John Doe Inc","workNumber":"5151231234"},{"displayName":"John Doe","publicID":"cc:505","primaryAddress":{"state":"IA","country":"US","displayName":"Waukee, IA","publicID":"cc:204","city":"Waukee","addressType":"home"},"cellNumber":"5157241915","primaryPhoneType":"work","subtype":"Person","lastName":"Doe","firstName":"John","contactType":"Person"}],"serviceRequests":[],"totalIncurredNet":{"currency":"usd","amount":0.00},"claimReporter":{"relationToInsured":"self","reportedBy":{"displayName":"Portal User","publicID":"cc:403","subtype":"UserContact","lastName":"User","firstName":"Portal","contactType":"UserContact"}},"vendors":[],"canUploadDocument":true,"exposures":[],"adjuster":{"displayName":"Ernie Pasquale","email":"epasquale@acmeins.com","lastName":"Pasquale","firstName":"Ernie","phoneNumber":"2135558164"},"notes":[],"claimNumber":"000-00-000003","lossDate":"2019-03-29T14:00:00Z","claimContacts":[{"publicID":"cc:1","contactRolesDisplay":["Agent"],"contactRoles":["agent"],"contactDTO":{"displayName":"","publicID":"cc:503","primaryAddress":{"country":"US","displayName":"","publicID":"cc:201"},"subtype":"Company","contactType":"Company"}},{"publicID":"cc:3","contactRolesDisplay":["Reporter"],"contactRoles":["reporter"],"contactDTO":{"displayName":"Portal User","publicID":"cc:403","subtype":"UserContact","lastName":"User","firstName":"Portal","contactType":"UserContact"}},{"publicID":"cc:2","contactRolesDisplay":["Insured"],"contactRoles":["insured"],"contactDTO":{"displayName":"John Doe Inc","publicID":"cc:504","primaryAddress":{"state":"IA","country":"US","displayName":"1440 SE Bishop Drive, Waukee, IA 50263","publicID":"cc:203","city":"Waukee","addressLine1":"1440 SE Bishop Drive","postalCode":"50263","addressType":"business"},"policyRole":"insured","primaryPhoneType":"work","emailAddress1":"johndoe@mailinator.com","subtype":"Company","contactType":"Company","contactName":"John Doe Inc","workNumber":"5151231234"}},{"publicID":"cc:4","contactRolesDisplay":["Main Contact"],"contactRoles":["maincontact"],"contactDTO":{"displayName":"John Doe","publicID":"cc:505","primaryAddress":{"state":"IA","country":"US","displayName":"Waukee, IA","publicID":"cc:204","city":"Waukee","addressType":"home"},"cellNumber":"5157241915","primaryPhoneType":"work","subtype":"Person","lastName":"Doe","firstName":"John","contactType":"Person"}}],"claimState":"open","lossType":"GL","lobs":{"businessOwner":{"fixedPropertyIncidents":[{"publicID":"cc:1","propertyDescription":"damage desc"}],"injuryIncidents":[]}}},"jsonrpc":"2.0"}