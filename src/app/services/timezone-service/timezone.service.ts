import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//This implements the timezone lookup table
export class TimezoneService {

  constructor() { }

  timezoneLookupTable: Record<string, number> = {
    'Etc/GMT+12': 0,
    'Etc/GMT+11': 110,
    'Pacific/Midway': 110,
    'Pacific/Niue': 110,
    'Pacific/Pago_Pago': 110,
    'Pacific/Samoa': 110,
    'US/Samoa': 110,
    'America/Adak': 200,
    'America/Atka': 200,
    'Etc/GMT+10': 200,
    'HST': 200,
    'Pacific/Honolulu': 200,
    'Pacific/Johnston': 200,
    'Pacific/Rarotonga': 200,
    'Pacific/Tahiti': 200,
    'SystemV/HST10': 200,
    'US/Aleutian': 200,
    'US/Hawaii': 200,
    'Pacific/Marquesas': 1200,
    'AST': 300,
    'America/Anchorage': 300,
    'America/Juneau': 300,
    'America/Metlakatla': 300,
    'America/Nome': 300,
    'America/Sitka': 300,
    'America/Yakutat': 300,
    'Etc/GMT+9': 300,
    'Pacific/Gambier': 300,
    'SystemV/YST9': 300,
    'SystemV/YST9YDT': 300,
    'US/Alaska': 300,
    'America/Dawson': 400,
    'America/Ensenada': 400,
    'America/Los_Angeles': 400,
    'America/Santa_Isabel': 400,
    'America/Tijuana': 400,
    'America/Vancouver': 400,
    'America/Whitehorse': 400,
    'Canada/Pacific': 400,
    'Canada/Yukon': 400,
    'Etc/GMT+8': 400,
    'Mexico/BajaNorte': 400,
    'PST': 400,
    'PST8PDT': 400,
    'Pacific/Pitcairn': 400,
    'SystemV/PST8': 400,
    'SystemV/PST8PDT': 400,
    'US/Pacific': 400,
    'US/Pacific-New': 400,
    'America/Boise': 500,
    'America/Cambridge_Bay': 500,
    'America/Chihuahua': 500,
    'America/Creston': 500,
    'America/Dawson_Creek': 500,
    'America/Denver': 500,
    'America/Edmonton': 500,
    'America/Fort_Nelson': 500,
    'America/Hermosillo': 500,
    'America/Inuvik': 500,
    'America/Mazatlan': 500,
    'America/Ojinaga': 500,
    'America/Phoenix': 500,
    'America/Shiprock': 500,
    'America/Yellowknife': 500,
    'Canada/Mountain': 500,
    'Etc/GMT+7': 500,
    'MST': 500,
    'MST7MDT': 500,
    'Mexico/BajaSur': 500,
    'Navajo': 500,
    'PNT': 500,
    'SystemV/MST7': 500,
    'SystemV/MST7MDT': 500,
    'US/Arizona': 500,
    'US/Mountain': 500,
    'America/Bahia_Banderas': 600,
    'America/Belize': 600,
    'America/Chicago': 600,
    'America/Costa_Rica': 600,
    'America/El_Salvador': 600,
    'America/Guatemala': 600,
    'America/Indiana/Knox': 600,
    'America/Indiana/Tell_City': 600,
    'America/Knox_IN': 600,
    'America/Managua': 600,
    'America/Matamoros': 600,
    'America/Menominee': 600,
    'America/Merida': 600,
    'America/Mexico_City': 600,
    'America/Monterrey': 600,
    'America/North_Dakota/Beulah': 600,
    'America/North_Dakota/Center': 600,
    'America/North_Dakota/New_Salem': 600,
    'America/Rainy_River': 600,
    'America/Rankin_Inlet': 600,
    'America/Regina': 600,
    'America/Resolute': 600,
    'America/Swift_Current': 600,
    'America/Tegucigalpa': 600,
    'America/Winnipeg': 600,
    'CST': 600,
    'CST6CDT': 600,
    'Canada/Central': 600,
    'Canada/Saskatchewan': 600,
    'Chile/EasterIsland': 600,
    'Etc/GMT+6': 600,
    'Mexico/General': 600,
    'Pacific/Easter': 600,
    'Pacific/Galapagos': 600,
    'SystemV/CST6': 600,
    'SystemV/CST6CDT': 600,
    'US/Central': 600,
    'US/Indiana-Starke': 600,
    'America/Atikokan': 700,
    'America/Bogota': 700,
    'America/Cancun': 700,
    'America/Cayman': 700,
    'America/Coral_Harbour': 700,
    'America/Detroit': 700,
    'America/Eirunepe': 700,
    'America/Fort_Wayne': 700,
    'America/Grand_Turk': 700,
    'America/Guayaquil': 700,
    'America/Havana': 700,
    'America/Indiana/Indianapolis': 700,
    'America/Indiana/Marengo': 700,
    'America/Indiana/Petersburg': 700,
    'America/Indiana/Vevay': 700,
    'America/Indiana/Vincennes': 700,
    'America/Indiana/Winamac': 700,
    'America/Indianapolis': 700,
    'America/Iqaluit': 700,
    'America/Jamaica': 700,
    'America/Kentucky/Louisville': 700,
    'America/Kentucky/Monticello': 700,
    'America/Lima': 700,
    'America/Louisville': 700,
    'America/Montreal': 700,
    'America/Nassau': 700,
    'America/New_York': 700,
    'America/Nipigon': 700,
    'America/Panama': 700,
    'America/Pangnirtung': 700,
    'America/Port-au-Prince': 700,
    'America/Porto_Acre': 700,
    'America/Rio_Branco': 700,
    'America/Thunder_Bay': 700,
    'America/Toronto': 700,
    'Brazil/Acre': 700,
    'Canada/Eastern': 700,
    'Cuba': 700,
    'EST': 700,
    'EST5EDT': 700,
    'Etc/GMT+5': 700,
    'IET': 700,
    'Jamaica': 700,
    'SystemV/EST5': 700,
    'SystemV/EST5EDT': 700,
    'US/East-Indiana': 700,
    'US/Eastern': 700,
    'US/Michigan': 700,
    'America/Anguilla': 800,
    'America/Antigua': 800,
    'America/Aruba': 800,
    'America/Asuncion': 800,
    'America/Barbados': 800,
    'America/Blanc-Sablon': 800,
    'America/Boa_Vista': 800,
    'America/Campo_Grande': 800,
    'America/Caracas': 800,
    'America/Cuiaba': 800,
    'America/Curacao': 800,
    'America/Dominica': 800,
    'America/Glace_Bay': 800,
    'America/Goose_Bay': 800,
    'America/Grenada': 800,
    'America/Guadeloupe': 800,
    'America/Guyana': 800,
    'America/Halifax': 800,
    'America/Kralendijk': 800,
    'America/La_Paz': 800,
    'America/Lower_Princes': 800,
    'America/Manaus': 800,
    'America/Marigot': 800,
    'America/Martinique': 800,
    'America/Moncton': 800,
    'America/Montserrat': 800,
    'America/Port_of_Spain': 800,
    'America/Porto_Velho': 800,
    'America/Puerto_Rico': 800,
    'America/Santiago': 800,
    'America/Santo_Domingo': 800,
    'America/St_Barthelemy': 800,
    'America/St_Kitts': 800,
    'America/St_Lucia': 800,
    'America/St_Thomas': 800,
    'America/St_Vincent': 800,
    'America/Thule': 800,
    'America/Tortola': 800,
    'America/Virgin': 800,
    'Atlantic/Bermuda': 800,
    'Brazil/West': 800,
    'Canada/Atlantic': 800,
    'Chile/Continental': 800,
    'Etc/GMT+4': 800,
    'PRT': 800,
    'SystemV/AST4': 800,
    'SystemV/AST4ADT': 800,
    'America/St_Johns': 900,
    'CNT': 900,
    'Canada/Newfoundland': 900,
    'AGT': 910,
    'America/Araguaina': 910,
    'America/Argentina/Buenos_Aires': 910,
    'America/Argentina/Catamarca': 910,
    'America/Argentina/ComodRivadavia': 910,
    'America/Argentina/Cordoba': 910,
    'America/Argentina/Jujuy': 910,
    'America/Argentina/La_Rioja': 910,
    'America/Argentina/Mendoza': 910,
    'America/Argentina/Rio_Gallegos': 910,
    'America/Argentina/Salta': 910,
    'America/Argentina/San_Juan': 910,
    'America/Argentina/San_Luis': 910,
    'America/Argentina/Tucuman': 910,
    'America/Argentina/Ushuaia': 910,
    'America/Bahia': 910,
    'America/Belem': 910,
    'America/Buenos_Aires': 910,
    'America/Catamarca': 910,
    'America/Cayenne': 910,
    'America/Cordoba': 910,
    'America/Fortaleza': 910,
    'America/Godthab': 910,
    'America/Jujuy': 910,
    'America/Maceio': 910,
    'America/Mendoza': 910,
    'America/Miquelon': 910,
    'America/Montevideo': 910,
    'America/Paramaribo': 910,
    'America/Punta_Arenas': 910,
    'America/Recife': 910,
    'America/Rosario': 910,
    'America/Santarem': 910,
    'America/Sao_Paulo': 910,
    'Antarctica/Palmer': 910,
    'Antarctica/Rothera': 910,
    'Atlantic/Stanley': 910,
    'BET': 910,
    'Brazil/East': 910,
    'Etc/GMT+3': 910,
    'America/Noronha': 1000,
    'Atlantic/South_Georgia': 1000,
    'Brazil/DeNoronha': 1000,
    'Etc/GMT+2': 1000,
    'America/Scoresbysund': 1100,
    'Atlantic/Azores': 1100,
    'Atlantic/Cape_Verde': 1110,
    'Etc/GMT+1': 1100,
    'Africa/Abidjan': 1230,
    'Africa/Accra': 1230,
    'Africa/Bamako': 1230,
    'Africa/Banjul': 1230,
    'Africa/Bissau': 1230,
    'Africa/Casablanca': 1230,
    'Africa/Conakry': 1230,
    'Africa/Dakar': 1230,
    'Africa/El_Aaiun': 1230,
    'Africa/Freetown': 1230,
    'Africa/Lome': 1230,
    'Africa/Monrovia': 1230,
    'Africa/Nouakchott': 1230,
    'Africa/Ouagadougou': 1230,
    'Africa/Sao_Tome': 1230,
    'Africa/Timbuktu': 1230,
    'America/Danmarkshavn': 1230,
    'Antarctica/Troll': 1230,
    'Atlantic/Canary': 1230,
    'Atlantic/Faeroe': 1230,
    'Atlantic/Faroe': 1230,
    'Atlantic/Madeira': 1230,
    'Atlantic/Reykjavik': 1230,
    'Atlantic/St_Helena': 1230,
    'Eire': 1230,
    'Etc/GMT': 1230,
    'Etc/GMT+0': 1230,
    'Etc/GMT-0': 1230,
    'Etc/GMT0': 1230,
    'Etc/Greenwich': 1230,
    'Etc/UCT': 1230,
    'Etc/UTC': 1230,
    'Etc/Universal': 1230,
    'Etc/Zulu': 1230,
    'Europe/Belfast': 1230,
    'Europe/Dublin': 1230,
    'Europe/Guernsey': 1230,
    'Europe/Isle_of_Man': 1230,
    'Europe/Jersey': 1230,
    'Europe/Lisbon': 1230,
    'Europe/London': 1230,
    'GB': 1230,
    'GB-Eire': 1230,
    'GMT': 1230,
    'GMT0': 1230,
    'Greenwich': 1230,
    'Iceland': 1230,
    'Portugal': 1230,
    'UCT': 1230,
    'UTC': 1230,
    'Universal': 1230,
    'WET': 1230,
    'Zulu': 1230,
    'Africa/Algiers': 1300,
    'Africa/Bangui': 1300,
    'Africa/Brazzaville': 1300,
    'Africa/Ceuta': 1300,
    'Africa/Douala': 1300,
    'Africa/Kinshasa': 1300,
    'Africa/Lagos': 1300,
    'Africa/Libreville': 1300,
    'Africa/Luanda': 1300,
    'Africa/Malabo': 1300,
    'Africa/Ndjamena': 1300,
    'Africa/Niamey': 1300,
    'Africa/Porto-Novo': 1300,
    'Africa/Tunis': 1300,
    'Arctic/Longyearbyen': 1300,
    'Atlantic/Jan_Mayen': 1300,
    'CET': 1300,
    'ECT': 1300,
    'Etc/GMT-1': 1300,
    'Europe/Amsterdam': 1300,
    'Europe/Andorra': 1300,
    'Europe/Belgrade': 1300,
    'Europe/Berlin': 1300,
    'Europe/Bratislava': 1300,
    'Europe/Brussels': 1300,
    'Europe/Budapest': 1300,
    'Europe/Busingen': 1300,
    'Europe/Copenhagen': 1300,
    'Europe/Gibraltar': 1300,
    'Europe/Ljubljana': 1300,
    'Europe/Luxembourg': 1300,
    'Europe/Madrid': 1300,
    'Europe/Malta': 1300,
    'Europe/Monaco': 1300,
    'Europe/Oslo': 1300,
    'Europe/Paris': 1300,
    'Europe/Podgorica': 1300,
    'Europe/Prague': 1300,
    'Europe/Rome': 1300,
    'Europe/San_Marino': 1300,
    'Europe/Sarajevo': 1300,
    'Europe/Skopje': 1300,
    'Europe/Stockholm': 1300,
    'Europe/Tirane': 1300,
    'Europe/Vaduz': 1300,
    'Europe/Vatican': 1300,
    'Europe/Vienna': 1300,
    'Europe/Warsaw': 1300,
    'Europe/Zagreb': 1300,
    'Europe/Zurich': 1300,
    'MET': 1300,
    'Poland': 1300,
    'ART': 1400,
    'Africa/Blantyre': 1400,
    'Africa/Bujumbura': 1400,
    'Africa/Cairo': 1400,
    'Africa/Gaborone': 1400,
    'Africa/Harare': 1400,
    'Africa/Johannesburg': 1400,
    'Africa/Khartoum': 1400,
    'Africa/Kigali': 1400,
    'Africa/Lubumbashi': 1400,
    'Africa/Lusaka': 1400,
    'Africa/Maputo': 1400,
    'Africa/Maseru': 1400,
    'Africa/Mbabane': 1400,
    'Africa/Tripoli': 1400,
    'Africa/Windhoek': 1400,
    'Asia/Amman': 1400,
    'Asia/Beirut': 1400,
    'Asia/Damascus': 1400,
    'Asia/Famagusta': 1400,
    'Asia/Gaza': 1400,
    'Asia/Hebron': 1400,
    'Asia/Jerusalem': 1400,
    'Asia/Nicosia': 1400,
    'Asia/Tel_Aviv': 1400,
    'CAT': 1400,
    'EET': 1400,
    'Egypt': 1400,
    'Etc/GMT-2': 1400,
    'Europe/Athens': 1400,
    'Europe/Bucharest': 1400,
    'Europe/Chisinau': 1400,
    'Europe/Helsinki': 1400,
    'Europe/Kaliningrad': 1400,
    'Europe/Kiev': 1400,
    'Europe/Mariehamn': 1400,
    'Europe/Nicosia': 1400,
    'Europe/Riga': 1400,
    'Europe/Sofia': 1400,
    'Europe/Tallinn': 1400,
    'Europe/Tiraspol': 1400,
    'Europe/Uzhgorod': 1400,
    'Europe/Vilnius': 1400,
    'Europe/Zaporozhye': 1400,
    'Israel': 1400,
    'Libya': 1400,
    'Africa/Addis_Ababa': 1500,
    'Africa/Asmara': 1500,
    'Africa/Asmera': 1500,
    'Africa/Dar_es_Salaam': 1500,
    'Africa/Djibouti': 1500,
    'Africa/Juba': 1500,
    'Africa/Kampala': 1500,
    'Africa/Mogadishu': 1500,
    'Africa/Nairobi': 1500,
    'Antarctica/Syowa': 1500,
    'Asia/Aden': 1500,
    'Asia/Baghdad': 1500,
    'Asia/Bahrain': 1500,
    'Asia/Istanbul': 1500,
    'Asia/Kuwait': 1500,
    'Asia/Qatar': 1500,
    'Asia/Riyadh': 1500,
    'EAT': 1500,
    'Etc/GMT-3': 1500,
    'Europe/Istanbul': 1500,
    'Europe/Kirov': 1500,
    'Europe/Minsk': 1500,
    'Europe/Moscow': 1500,
    'Europe/Simferopol': 1500,
    'Indian/Antananarivo': 1500,
    'Indian/Comoro': 1500,
    'Indian/Mayotte': 1500,
    'Turkey': 1500,
    'W-SU': 1500,
    'Asia/Tehran': 1550,
    'Iran': 1550,
    'Asia/Baku': 1600,
    'Asia/Dubai': 1600,
    'Asia/Muscat': 1600,
    'Asia/Tbilisi': 1600,
    'Asia/Yerevan': 1600,
    'Etc/GMT-4': 1600,
    'Europe/Astrakhan': 1600,
    'Europe/Samara': 1600,
    'Europe/Saratov': 1600,
    'Europe/Ulyanovsk': 1600,
    'Europe/Volgograd': 1600,
    'Indian/Mahe': 1600,
    'Indian/Mauritius': 1600,
    'Indian/Reunion': 1600,
    'NET': 1600,
    'Asia/Kabul': 1630,
    'Antarctica/Mawson': 1710,
    'Asia/Aqtau': 1710,
    'Asia/Aqtobe': 1710,
    'Asia/Ashgabat': 1710,
    'Asia/Ashkhabad': 1710,
    'Asia/Atyrau': 1710,
    'Asia/Dushanbe': 1710,
    'Asia/Karachi': 1710,
    'Asia/Oral': 1710,
    'Asia/Qyzylorda': 1710,
    'Asia/Samarkand': 1710,
    'Asia/Tashkent': 1710,
    'Asia/Yekaterinburg': 1710,
    'Etc/GMT-5': 1710,
    'Indian/Kerguelen': 1710,
    'Indian/Maldives': 1710,
    'PLT': 1710,
    'Asia/Calcutta': 1720,
    'Asia/Colombo': 1720,
    'Asia/Kolkata': 1720,
    'IST': 1720,
    'Asia/Kathmandu': 1740,
    'Asia/Katmandu': 1740,
    'Antarctica/Vostok': 1800,
    'Asia/Almaty': 1800,
    'Asia/Bishkek': 1800,
    'Asia/Dacca': 1800,
    'Asia/Dhaka': 1800,
    'Asia/Kashgar': 1800,
    'Asia/Omsk': 1800,
    'Asia/Qostanay': 1800,
    'Asia/Thimbu': 1800,
    'Asia/Thimphu': 1800,
    'Asia/Urumqi': 1800,
    'BST': 1800,
    'Etc/GMT-6': 1800,
    'Indian/Chagos': 1800,
    'Asia/Rangoon': 1820,
    'Asia/Yangon': 1820,
    'Indian/Cocos': 1820,
    'Antarctica/Davis': 1910,
    'Asia/Bangkok': 1910,
    'Asia/Barnaul': 1910,
    'Asia/Ho_Chi_Minh': 1910,
    'Asia/Hovd': 1910,
    'Asia/Jakarta': 1910,
    'Asia/Krasnoyarsk': 1910,
    'Asia/Novokuznetsk': 1910,
    'Asia/Novosibirsk': 1910,
    'Asia/Phnom_Penh': 1910,
    'Asia/Pontianak': 1910,
    'Asia/Saigon': 1910,
    'Asia/Tomsk': 1910,
    'Asia/Vientiane': 1910,
    'Etc/GMT-7': 1910,
    'Indian/Christmas': 1910,
    'VST': 1910,
    'Antarctica/Casey': 2000,
    'Asia/Brunei': 2000,
    'Asia/Choibalsan': 2000,
    'Asia/Chongqing': 2000,
    'Asia/Chungking': 2000,
    'Asia/Harbin': 2000,
    'Asia/Hong_Kong': 2000,
    'Asia/Irkutsk': 2000,
    'Asia/Kuala_Lumpur': 2000,
    'Asia/Kuching': 2000,
    'Asia/Macao': 2000,
    'Asia/Macau': 2000,
    'Asia/Makassar': 2000,
    'Asia/Manila': 2000,
    'Asia/Shanghai': 2000,
    'Asia/Singapore': 2000,
    'Asia/Taipei': 2000,
    'Asia/Ujung_Pandang': 2000,
    'Asia/Ulaanbaatar': 2000,
    'Asia/Ulan_Bator': 2000,
    'Australia/Perth': 2000,
    'Australia/West': 2000,
    'CTT': 2000,
    'Etc/GMT-8': 2000,
    'Hongkong': 2000,
    'PRC': 2000,
    'Singapore': 2000,
    'Australia/Eucla': 1200,
    'Asia/Chita': 2100,
    'Asia/Dili': 2100,
    'Asia/Jayapura': 2100,
    'Asia/Khandyga': 2100,
    'Asia/Pyongyang': 2100,
    'Asia/Seoul': 2100,
    'Asia/Tokyo': 2100,
    'Asia/Yakutsk': 2100,
    'Etc/GMT-9': 2100,
    'JST': 2100,
    'Japan': 2100,
    'Pacific/Palau': 2100,
    'ROK': 2100,
    'ACT': 2130,
    'Australia/Adelaide': 2130,
    'Australia/Broken_Hill': 2130,
    'Australia/Darwin': 2130,
    'Australia/North': 2130,
    'Australia/South': 2130,
    'Australia/Yancowinna': 2130,
    'AET': 2200,
    'Antarctica/DumontDUrville': 2200,
    'Asia/Ust-Nera': 2200,
    'Asia/Vladivostok': 2200,
    'Australia/ACT': 2200,
    'Australia/Brisbane': 2200,
    'Australia/Canberra': 2200,
    'Australia/Currie': 2200,
    'Australia/Hobart': 2200,
    'Australia/Lindeman': 2200,
    'Australia/Melbourne': 2200,
    'Australia/NSW': 2200,
    'Australia/Queensland': 2200,
    'Australia/Sydney': 2200,
    'Australia/Tasmania': 2200,
    'Australia/Victoria': 2200,
    'Etc/GMT-10': 2200,
    'Pacific/Chuuk': 2200,
    'Pacific/Guam': 2200,
    'Pacific/Port_Moresby': 2200,
    'Pacific/Saipan': 2200,
    'Pacific/Truk': 2200,
    'Pacific/Yap': 2200,
    'Australia/LHI': 1200,
    'Australia/Lord_Howe': 1200,
    'Antarctica/Macquarie': 2300,
    'Asia/Magadan': 2300,
    'Asia/Sakhalin': 2300,
    'Asia/Srednekolymsk': 2300,
    'Etc/GMT-11': 2300,
    'Pacific/Bougainville': 2300,
    'Pacific/Efate': 2300,
    'Pacific/Guadalcanal': 2300,
    'Pacific/Kosrae': 2300,
    'Pacific/Norfolk': 2300,
    'Pacific/Noumea': 2300,
    'Pacific/Pohnpei': 2300,
    'Pacific/Ponape': 2300,
    'SST': 2300,
    'Antarctica/McMurdo': 2400,
    'Antarctica/South_Pole': 2400,
    'Asia/Anadyr': 2400,
    'Asia/Kamchatka': 2400,
    'Etc/GMT-12': 2400,
    'Kwajalein': 2400,
    'NST': 2400,
    'NZ': 2400,
    'Pacific/Auckland': 2400,
    'Pacific/Fiji': 2400,
    'Pacific/Funafuti': 2400,
    'Pacific/Kwajalein': 2400,
    'Pacific/Majuro': 2400,
    'Pacific/Nauru': 2400,
    'Pacific/Tarawa': 2400,
    'Pacific/Wake': 2400,
    'Pacific/Wallis': 2400,
    'NZ-CHAT': 1200,
    'Pacific/Chatham': 1200,
    'Etc/GMT-13': 2500,
    'MIT': 2500,
    'Pacific/Apia': 2500,
    'Pacific/Enderbury': 2500,
    'Pacific/Fakaofo': 2500,
    'Pacific/Tongatapu': 2500,
    'Etc/GMT-14': 1200,
    'Pacific/Kiritimati': 1200
  }

  lookupTimezone(key: string): number {
    if (key in this.timezoneLookupTable) {
      return this.timezoneLookupTable[key]
    } else {
      return 500;
    }
  }

}