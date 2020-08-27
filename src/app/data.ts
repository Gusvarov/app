export interface IData {
    buisnessDetails: {
        buisnessName: string,
        locations:  [ 
            {
                address: string,
                phoneNumber: string
            }
        ] | []
    },
    configuration: {
        templateId: string,
        count: number,
        title: string
    }
  }
