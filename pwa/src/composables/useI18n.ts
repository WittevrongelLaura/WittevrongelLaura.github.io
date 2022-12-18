import { createI18n } from 'vue-i18n'

const AVAILABLE_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'nl', label: 'Dutch' },
]

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'nl', // set fallback locale
  availableLocales: AVAILABLE_LANGUAGES.map((l) => l.code),

  messages: {
    en: {
      navigation: {
        home: 'Home',
        templates: 'Shop',
        trips: 'Trips',
        signin: 'Sign in',
        free: 'Use for free',
      },
      footer: {
        rights: 'All Rights Reserved',
      },
      table: {
        name: 'Name',
        description: 'Description',
        completed: 'Completed',
        delete: 'Delete',
        share: 'Share',
        carpool: 'Carpools',
      },
      share: {
        title: 'Share with friends',
        sharingFriends: 'Sharing friends',
        chooseFriend: 'Choose a friend',
      },
      trips: {
        titleTrips: 'Trips',
        titleShared: 'Shared with you',
        description: 'All of your checklists for the trips.',
        createNew: 'Create a new checklist',
        noShared: 'No checklists shared with you.',
        allShared: 'All shared checklists with you.',
        save: 'SAVE',
        addTask: 'Add task',
        addSubheading: 'Add sub-heading',
        addTemplate: 'Add template',
        created: 'Created',
        updated: 'Last updated',
      },
      carpool: {
        title: 'Carpool',
        newCarpool: 'New carpool',
        noCarpools: 'There are no carpools',
        createNew: 'Create a new carpool',
        driver: 'Driver',
        seats: 'Seats',
        passengers: 'Passengers',
        chooseFriend: 'Choose a friend',
      },
      account: {
        hi: 'Hi',
        logout: 'Log out',
        language: 'Language',
        boughtChecklists: 'Your bought checklists',
        noChecklists: 'No bought templates',
        buySome: 'Buy some here',
      },
      templates: {
        title: 'The Templates Shop',
        error: 'Something went wrong',
        retrieveError: 'Something went wrong while retrieving your templates',
        pay: 'Pay',
        emptyShoppingCart: 'Your shopping cart is empty',
      },
    },
    nl: {
      navigation: {
        home: 'Home',
        templates: 'Winkel',
        trips: 'Trips',
        signin: 'Inloggen',
        free: 'Gratis gebruiken',
      },
      footer: {
        rights: 'Alle rechten voorbehouden',
      },
      table: {
        name: 'Naam',
        description: 'Beschrijving',
        completed: 'Voltooid',
        delete: 'Verwijder',
        share: 'Deel',
        carpool: 'Carpools',
      },
      share: {
        title: 'Deel met vrienden',
        sharingFriends: 'Gedeelde vrienden',
        chooseFriend: 'Kies een vriend',
      },
      trips: {
        titleTrips: 'Trips',
        titleShared: 'Gedeeld met jou',
        description: 'Al uw checklists voor de trips.',
        createNew: 'Maak een nieuwe checklist',
        noShared: 'Geen checklists met jou gedeeld',
        allShared: 'Alle gedeelde checklists met jou.',
        save: 'OPSLAAN',
        addTask: 'Taak toevoegen',
        addSubheading: 'Subtitel toevoegen',
        addTemplate: 'Sjabloon toevoegen',
        created: 'Aangemaakt',
        updated: 'Bijgewerkt',
      },
      carpool: {
        title: 'Carpool',
        newCarpool: 'Nieuwe carpool',
        noCarpools: 'Er zijn geen carpools',
        createNew: 'Maak een nieuwe carpool',
        driver: 'Bestuurder',
        seats: 'Plaatsen',
        passengers: 'Reizigers',
        chooseFriend: 'Kies een vriend',
      },
      account: {
        hi: 'Hallo',
        logout: 'Afmelden',
        language: 'Taal',
        boughtChecklists: 'Uw gekochte checklists',
        noChecklists: 'U heeft nog geen checklists gekocht',
        buySome: 'Koop er hier',
      },
      templates: {
        title: 'De sjablonen winkel',
        error: 'Er is iets fout gegaan',
        retrieveError: 'Er is iets fout gegaan bij het ophalen van de sjablonen',
        pay: 'Afrekenen',
        emptyShoppingCart: 'Uw winkelwagen is leeg',
      },
    },
  },
})

const loadLanguage = async (lang: string) => {
  if (!AVAILABLE_LANGUAGES.map((l) => l.code).includes(lang)) {
    return
  }
  i18n.global.locale = lang as any
}

export default () => {
  return {
    AVAILABLE_LANGUAGES,
    i18n,
    t: i18n.global.t,
    loadLanguage,
  }
}
