import * as ALPHA_2 from '../constants/alpha-2';

const NANP = '+# (###) ###-####';

const COUNTRY_DATA_WITH_MASKS = [
  {
    alpha2: ALPHA_2.US, countryCode: '+1', countryName: 'United States', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.CA, countryCode: '+1', countryName: 'Canada', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.AG, countryCode: '+1268', countryName: 'Antigua and Barbuda', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.AI, countryCode: '+1264', countryName: 'Anguilla', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.BB, countryCode: '+1246', countryName: 'Barbados', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.BM, countryCode: '+1441', countryName: 'Bermuda', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.BS, countryCode: '+1242', countryName: 'Bahamas', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.DM, countryCode: '+1767', countryName: 'Dominica', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.DO_1, countryCode: '+1809', countryName: 'Dominican Republic', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.DO_2, countryCode: '+1829', countryName: 'Dominican Republic', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.DO_3, countryCode: '+1849', countryName: 'Dominican Republic', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.GD, countryCode: '+1473', countryName: 'Grenada', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.GU, countryCode: '+1671', countryName: 'Guam', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.JM, countryCode: '+1876', countryName: 'Jamaica', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.KN, countryCode: '+1869', countryName: 'Saint Kitts and Nevis', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.KY, countryCode: '+1345', countryName: 'Cayman Islands', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.LC, countryCode: '+1758', countryName: 'Saint Lucia', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.PR_1, countryCode: '+1787', countryName: 'Puerto Rico', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.PR_2, countryCode: '+1939', countryName: 'Puerto Rico', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.TC, countryCode: '+1649', countryName: 'Turks and Caicos Islands', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.TT, countryCode: '+1868', countryName: 'Trinidad and Tobago', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.VC, countryCode: '+1784', countryName: 'Saint Vincent and the Grenadines', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.VG, countryCode: '+1284', countryName: 'Virgin Islands, British', masks: [NANP],
  },
  {
    alpha2: ALPHA_2.BE, countryCode: '+32', countryName: 'België', masks: ['+## ### ## ## ##'],
  },
  {
    alpha2: ALPHA_2.AT,
    countryCode: '+43',
    countryName: 'Österreich',
    masks: [
      '+## ### ###',
      '+## ### ####',
      '+## ### #####',
      '+## ### ######',
      '+## ### #######',
      '+## ### ########',
      '+## ### #########',
      '+## ### ##########',
      '+## ### ###########',
      '+## ### ############',
    ],
  },
  {
    alpha2: ALPHA_2.GB, countryCode: '+44', countryName: 'United Kingdom', masks: ['+## #### ######'],
  },
  {
    alpha2: ALPHA_2.CN, countryCode: '+86', countryName: '中国', masks: ['+## ###-####-####'],
  },
  {
    alpha2: ALPHA_2.FR, countryCode: '+33', countryName: 'France', masks: ['+## # ## ## ## ##'],
  },
  {
    alpha2: ALPHA_2.DE, countryCode: '+49', countryName: 'Deutschland', masks: ['+## ### ########'],
  },
  {
    alpha2: ALPHA_2.IN, countryCode: '+91', countryName: 'भारत', masks: ['+## ####-######'],
  },
  {
    alpha2: ALPHA_2.ID, countryCode: '+62', countryName: 'Indonesia', masks: ['+## ###-####-####'],
  },
  {
    alpha2: ALPHA_2.JP, countryCode: '+81', countryName: '日本', masks: ['+## ##-####-####'],
  },
  {
    alpha2: ALPHA_2.KR, countryCode: '+82', countryName: '대한민국', masks: ['+## ##-####-####'],
  },
  {
    alpha2: ALPHA_2.PL, countryCode: '+48', countryName: 'Polska', masks: ['+## ## ### ## ##'],
  },
  {
    alpha2: ALPHA_2.KZ, countryCode: '+7', countryName: 'Қазақстан', masks: ['+# (###) ###-##-##'],
  },
  {
    alpha2: ALPHA_2.RU, countryCode: '+7', countryName: 'Россия', masks: ['+# (###) ###-##-##'],
  },
  {
    alpha2: ALPHA_2.ES, countryCode: '+34', countryName: 'España', masks: ['+## ### ### ###'],
  },
  {
    alpha2: ALPHA_2.UA, countryCode: '+380', countryName: 'Україна', masks: ['+### (##) ###-##-##'],
  },
];

const COUNTRY_DATA_WITH_NO_MASKS = [
  { alpha2: ALPHA_2.AD, countryCode: '+376', countryName: 'Andorra' },
  { alpha2: ALPHA_2.AE, countryCode: '+971', countryName: 'دولة الإمارات العربية المتحدة' },
  { alpha2: ALPHA_2.AF, countryCode: '+93', countryName: 'افغانستان' },
  { alpha2: ALPHA_2.AL, countryCode: '+355', countryName: 'Shqipëria' },
  { alpha2: ALPHA_2.AM, countryCode: '+374', countryName: 'Հայաստան' },
  { alpha2: ALPHA_2.AN, countryCode: '+599', countryName: 'Netherlands Antilles' },
  { alpha2: ALPHA_2.AO, countryCode: '+244', countryName: 'Angola' },
  { alpha2: ALPHA_2.AR, countryCode: '+54', countryName: 'Argentina' },
  { alpha2: ALPHA_2.AU, countryCode: '+61', countryName: 'Australia' },
  { alpha2: ALPHA_2.AW, countryCode: '+297', countryName: 'Aruba' },
  { alpha2: ALPHA_2.AZ, countryCode: '+994', countryName: 'Azərbaycan' },
  { alpha2: ALPHA_2.BA, countryCode: '+387', countryName: 'Bosna i Hercegovina' },
  { alpha2: ALPHA_2.BD, countryCode: '+880', countryName: 'Bangladesh' },
  { alpha2: ALPHA_2.BF, countryCode: '+226', countryName: 'Burkina Faso' },
  { alpha2: ALPHA_2.BG, countryCode: '+359', countryName: 'България' },
  { alpha2: ALPHA_2.BH, countryCode: '+973', countryName: 'البحرين' },
  { alpha2: ALPHA_2.BI, countryCode: '+257', countryName: 'Burundi' },
  { alpha2: ALPHA_2.BJ, countryCode: '+229', countryName: 'Bénin' },
  { alpha2: ALPHA_2.BN, countryCode: '+673', countryName: 'Negara Brunei Darussalam' },
  { alpha2: ALPHA_2.BO, countryCode: '+591', countryName: 'Bolivia' },
  { alpha2: ALPHA_2.BR, countryCode: '+55', countryName: 'Brasil' },
  { alpha2: ALPHA_2.BT, countryCode: '+975', countryName: 'ʼbrug-yul' },
  { alpha2: ALPHA_2.BW, countryCode: '+267', countryName: 'Botswana' },
  { alpha2: ALPHA_2.BY, countryCode: '+375', countryName: 'Беларусь' },
  { alpha2: ALPHA_2.BZ, countryCode: '+501', countryName: 'Belize' },
  { alpha2: ALPHA_2.CD, countryCode: '+243', countryName: 'République démocratique du Congo' },
  { alpha2: ALPHA_2.CF, countryCode: '+236', countryName: 'Ködörösêse tî Bêafrîka' },
  { alpha2: ALPHA_2.CG, countryCode: '+242', countryName: 'République du Congo' },
  { alpha2: ALPHA_2.CH, countryCode: '+41', countryName: 'Schweiz' },
  { alpha2: ALPHA_2.CI, countryCode: '+225', countryName: 'Côte d\'Ivoire' },
  { alpha2: ALPHA_2.CK, countryCode: '+682', countryName: 'Cook Islands' },
  { alpha2: ALPHA_2.CL, countryCode: '+56', countryName: 'Chile' },
  { alpha2: ALPHA_2.CM, countryCode: '+237', countryName: 'Cameroon' },
  { alpha2: ALPHA_2.CO, countryCode: '+57', countryName: 'Colombia' },
  { alpha2: ALPHA_2.CR, countryCode: '+506', countryName: 'Costa Rica' },
  { alpha2: ALPHA_2.CU, countryCode: '+53', countryName: 'Cuba' },
  { alpha2: ALPHA_2.CV, countryCode: '+238', countryName: 'Cabo Verde' },
  { alpha2: ALPHA_2.CY, countryCode: '+357', countryName: 'Κύπρος' },
  { alpha2: ALPHA_2.CZ, countryCode: '+420', countryName: 'Česko' },
  { alpha2: ALPHA_2.DJ, countryCode: '+253', countryName: 'Djibouti' },
  { alpha2: ALPHA_2.DK, countryCode: '+45', countryName: 'Danmark' },
  { alpha2: ALPHA_2.DZ, countryCode: '+213', countryName: 'الجزائر' },
  { alpha2: ALPHA_2.EC, countryCode: '+593', countryName: 'Ecuador' },
  { alpha2: ALPHA_2.EE, countryCode: '+372', countryName: 'Eesti' },
  { alpha2: ALPHA_2.EG, countryCode: '+20', countryName: 'مصر‎' },
  { alpha2: ALPHA_2.ER, countryCode: '+291', countryName: 'ኤርትራ' },
  { alpha2: ALPHA_2.ET, countryCode: '+251', countryName: 'ኢትዮጵያ' },
  { alpha2: ALPHA_2.FI, countryCode: '+358', countryName: 'Suomi' },
  { alpha2: ALPHA_2.FJ, countryCode: '+679', countryName: 'Fiji' },
  { alpha2: ALPHA_2.FO, countryCode: '+298', countryName: 'Føroyar' },
  { alpha2: ALPHA_2.GA, countryCode: '+241', countryName: 'Gabon' },
  { alpha2: ALPHA_2.GE, countryCode: '+995', countryName: 'საქართველო' },
  { alpha2: ALPHA_2.GH, countryCode: '+233', countryName: 'Ghana' },
  { alpha2: ALPHA_2.GI, countryCode: '+350', countryName: 'Gibraltar' },
  { alpha2: ALPHA_2.GL, countryCode: '+299', countryName: 'Kalaallit Nunaat' },
  { alpha2: ALPHA_2.GM, countryCode: '+220', countryName: 'Gambia' },
  { alpha2: ALPHA_2.GN, countryCode: '+224', countryName: 'Guinée' },
  { alpha2: ALPHA_2.GP, countryCode: '+590', countryName: 'Guadeloupe' },
  { alpha2: ALPHA_2.GQ, countryCode: '+240', countryName: 'Guinea Ecuatorial' },
  { alpha2: ALPHA_2.GR, countryCode: '+30', countryName: 'Ελλάδα' },
  { alpha2: ALPHA_2.GT, countryCode: '+502', countryName: 'Guatemala' },
  { alpha2: ALPHA_2.GW, countryCode: '+245', countryName: 'Guiné-Bissau' },
  { alpha2: ALPHA_2.GY, countryCode: '+592', countryName: 'Guyana' },
  { alpha2: ALPHA_2.HK, countryCode: '+852', countryName: '香港' },
  { alpha2: ALPHA_2.HN, countryCode: '+504', countryName: 'Honduras' },
  { alpha2: ALPHA_2.HR, countryCode: '+385', countryName: 'Hrvatska' },
  { alpha2: ALPHA_2.HT, countryCode: '+509', countryName: 'Haïti' },
  { alpha2: ALPHA_2.HU, countryCode: '+36', countryName: 'Magyarország' },
  { alpha2: ALPHA_2.IE, countryCode: '+353', countryName: 'Éire' },
  { alpha2: ALPHA_2.IL, countryCode: '+972', countryName: 'יִשְׂרָאֵל' },
  { alpha2: ALPHA_2.IO, countryCode: '+246', countryName: 'British Indian Ocean Territory' },
  { alpha2: ALPHA_2.IQ, countryCode: '+964', countryName: 'العراق' },
  { alpha2: ALPHA_2.IR, countryCode: '+98', countryName: 'ایران' },
  { alpha2: ALPHA_2.IS, countryCode: '+354', countryName: 'Ísland' },
  { alpha2: ALPHA_2.IT, countryCode: '+39', countryName: 'Italia' },
  { alpha2: ALPHA_2.JO, countryCode: '+962', countryName: 'الأردن' },
  { alpha2: ALPHA_2.KE, countryCode: '+254', countryName: 'Kenya' },
  { alpha2: ALPHA_2.KG, countryCode: '+996', countryName: 'Кыргызстан' },
  { alpha2: ALPHA_2.KH, countryCode: '+855', countryName: 'Kâmpŭchéa' },
  { alpha2: ALPHA_2.KI, countryCode: '+686', countryName: 'Kiribati' },
  { alpha2: ALPHA_2.KM, countryCode: '+269', countryName: 'Komori' },
  { alpha2: ALPHA_2.KP, countryCode: '+850', countryName: '조선민주주의인민공화국' },
  { alpha2: ALPHA_2.KW, countryCode: '+965', countryName: 'الكويت' },
  { alpha2: ALPHA_2.LA, countryCode: '+856', countryName: 'ສປປລາວ' },
  { alpha2: ALPHA_2.LB, countryCode: '+961', countryName: 'لبنان' },
  { alpha2: ALPHA_2.LI, countryCode: '+423', countryName: 'Liechtenstein' },
  { alpha2: ALPHA_2.LK, countryCode: '+94', countryName: 'śrī laṃkāva' },
  { alpha2: ALPHA_2.LR, countryCode: '+231', countryName: 'Liberia' },
  { alpha2: ALPHA_2.LS, countryCode: '+266', countryName: 'Lesotho' },
  { alpha2: ALPHA_2.LT, countryCode: '+370', countryName: 'Lietuva' },
  { alpha2: ALPHA_2.LU, countryCode: '+352', countryName: 'Luxembourg' },
  { alpha2: ALPHA_2.LV, countryCode: '+371', countryName: 'Latvija' },
  { alpha2: ALPHA_2.LY, countryCode: '+218', countryName: 'ليبيا' },
  { alpha2: ALPHA_2.MA, countryCode: '+212', countryName: 'المغرب' },
  { alpha2: ALPHA_2.MC, countryCode: '+377', countryName: 'Monaco' },
  { alpha2: ALPHA_2.MD, countryCode: '+373', countryName: 'Moldova' },
  { alpha2: ALPHA_2.ME, countryCode: '+382', countryName: 'Црна Гора' },
  { alpha2: ALPHA_2.MG, countryCode: '+261', countryName: 'Madagasikara' },
  { alpha2: ALPHA_2.MK, countryCode: '+389', countryName: 'Македонија' },
  { alpha2: ALPHA_2.ML, countryCode: '+223', countryName: 'Mali' },
  { alpha2: ALPHA_2.MM, countryCode: '+95', countryName: 'Myanma' },
  { alpha2: ALPHA_2.MN, countryCode: '+976', countryName: 'Монгол улс' },
  { alpha2: ALPHA_2.MO, countryCode: '+853', countryName: '澳門' },
  { alpha2: ALPHA_2.MR, countryCode: '+222', countryName: 'موريتانيا' },
  { alpha2: ALPHA_2.MT, countryCode: '+356', countryName: 'Malta' },
  { alpha2: ALPHA_2.MU, countryCode: '+230', countryName: 'Maurice' },
  { alpha2: ALPHA_2.MV, countryCode: '+960', countryName: 'Maldives' },
  { alpha2: ALPHA_2.MW, countryCode: '+265', countryName: 'Malawi' },
  { alpha2: ALPHA_2.MX, countryCode: '+52', countryName: 'México' },
  { alpha2: ALPHA_2.MY, countryCode: '+60', countryName: 'Malaysia' },
  { alpha2: ALPHA_2.MZ, countryCode: '+258', countryName: 'Moçambique' },
  { alpha2: ALPHA_2.NA, countryCode: '+264', countryName: 'Namibia' },
  { alpha2: ALPHA_2.NC, countryCode: '+687', countryName: 'New Caledonia' },
  { alpha2: ALPHA_2.NE, countryCode: '+227', countryName: 'Niger' },
  { alpha2: ALPHA_2.NF, countryCode: '+672', countryName: 'Norfolk Island' },
  { alpha2: ALPHA_2.NG, countryCode: '+234', countryName: 'Nigeria' },
  { alpha2: ALPHA_2.NI, countryCode: '+505', countryName: 'Nicaragua' },
  { alpha2: ALPHA_2.NL, countryCode: '+31', countryName: 'Nederland' },
  { alpha2: ALPHA_2.NO, countryCode: '+47', countryName: 'Norge' },
  { alpha2: ALPHA_2.NP, countryCode: '+977', countryName: 'नपल' },
  { alpha2: ALPHA_2.NZ, countryCode: '+64', countryName: 'New Zealand' },
  { alpha2: ALPHA_2.OM, countryCode: '+968', countryName: 'عمان' },
  { alpha2: ALPHA_2.PA, countryCode: '+507', countryName: 'Panamá' },
  { alpha2: ALPHA_2.PE, countryCode: '+51', countryName: 'Perú' },
  { alpha2: ALPHA_2.PF, countryCode: '+689', countryName: 'French Polynesia' },
  { alpha2: ALPHA_2.PG, countryCode: '+675', countryName: 'Papua Niugini' },
  { alpha2: ALPHA_2.PH, countryCode: '+63', countryName: 'Pilipinas' },
  { alpha2: ALPHA_2.PK, countryCode: '+92', countryName: 'Pakistan' },
  { alpha2: ALPHA_2.PS, countryCode: '+970', countryName: 'فلسطين' },
  { alpha2: ALPHA_2.PT, countryCode: '+351', countryName: 'Portugal' },
  { alpha2: ALPHA_2.PW, countryCode: '+680', countryName: 'Palau' },
  { alpha2: ALPHA_2.PY, countryCode: '+595', countryName: 'Paraguay' },
  { alpha2: ALPHA_2.QA, countryCode: '+974', countryName: 'قطر' },
  { alpha2: ALPHA_2.RE, countryCode: '+262', countryName: 'La Réunion' },
  { alpha2: ALPHA_2.RO, countryCode: '+40', countryName: 'România' },
  { alpha2: ALPHA_2.RS, countryCode: '+381', countryName: 'Србија' },
  { alpha2: ALPHA_2.RW, countryCode: '+250', countryName: 'Rwanda' },
  { alpha2: ALPHA_2.SA, countryCode: '+966', countryName: 'العربية السعودية' },
  { alpha2: ALPHA_2.SB, countryCode: '+677', countryName: 'Solomon Islands' },
  { alpha2: ALPHA_2.SC, countryCode: '+248', countryName: 'Seychelles' },
  { alpha2: ALPHA_2.SD, countryCode: '+249', countryName: 'السودان' },
  { alpha2: ALPHA_2.SE, countryCode: '+46', countryName: 'Sverige' },
  { alpha2: ALPHA_2.SG, countryCode: '+65', countryName: 'Singapore' },
  { alpha2: ALPHA_2.SI, countryCode: '+386', countryName: 'Slovenija' },
  { alpha2: ALPHA_2.SK, countryCode: '+421', countryName: 'Slovensko' },
  { alpha2: ALPHA_2.SL, countryCode: '+232', countryName: 'Sierra Leone' },
  { alpha2: ALPHA_2.SM, countryCode: '+378', countryName: 'San Marino' },
  { alpha2: ALPHA_2.SN, countryCode: '+221', countryName: 'Sénégal' },
  { alpha2: ALPHA_2.SO, countryCode: '+252', countryName: 'Soomaaliya' },
  { alpha2: ALPHA_2.SR, countryCode: '+597', countryName: 'Suriname' },
  { alpha2: ALPHA_2.SS, countryCode: '+211', countryName: 'South Sudan' },
  { alpha2: ALPHA_2.ST, countryCode: '+239', countryName: 'São Tomé e Príncipe' },
  { alpha2: ALPHA_2.SV, countryCode: '+503', countryName: 'El Salvador' },
  { alpha2: ALPHA_2.SY, countryCode: '+963', countryName: 'سوريا‎‎' },
  { alpha2: ALPHA_2.SZ, countryCode: '+268', countryName: 'Swaziland' },
  { alpha2: ALPHA_2.TD, countryCode: '+235', countryName: 'Tchad' },
  { alpha2: ALPHA_2.TG, countryCode: '+228', countryName: 'Togo' },
  { alpha2: ALPHA_2.TH, countryCode: '+66', countryName: 'ประเทศไทย' },
  { alpha2: ALPHA_2.TJ, countryCode: '+992', countryName: 'Тоҷикистон' },
  { alpha2: ALPHA_2.TL, countryCode: '+670', countryName: 'Timor-Leste' },
  { alpha2: ALPHA_2.TM, countryCode: '+993', countryName: 'Türkmenistan' },
  { alpha2: ALPHA_2.TN, countryCode: '+216', countryName: 'تونس' },
  { alpha2: ALPHA_2.TO, countryCode: '+676', countryName: 'Tonga' },
  { alpha2: ALPHA_2.TR, countryCode: '+90', countryName: 'Türkiye' },
  { alpha2: ALPHA_2.TW, countryCode: '+886', countryName: '臺灣' },
  { alpha2: ALPHA_2.TZ, countryCode: '+255', countryName: 'Tanzania' },
  { alpha2: ALPHA_2.UG, countryCode: '+256', countryName: 'Uganda' },
  { alpha2: ALPHA_2.UY, countryCode: '+598', countryName: 'Uruguay' },
  { alpha2: ALPHA_2.UZ, countryCode: '+998', countryName: 'O‘zbekiston' },
  { alpha2: ALPHA_2.VE, countryCode: '+58', countryName: 'Venezuela' },
  { alpha2: ALPHA_2.VN, countryCode: '+84', countryName: 'Việt Nam' },
  { alpha2: ALPHA_2.VU, countryCode: '+678', countryName: 'Vanuatu' },
  { alpha2: ALPHA_2.WS, countryCode: '+685', countryName: 'Samoa' },
  { alpha2: ALPHA_2.YE, countryCode: '+967', countryName: 'اليَمَن' },
  { alpha2: ALPHA_2.ZA, countryCode: '+27', countryName: 'South Africa' },
  { alpha2: ALPHA_2.ZM, countryCode: '+260', countryName: 'Zambia' },
  { alpha2: ALPHA_2.ZW, countryCode: '+263', countryName: 'Zimbabwe' },
];

export default [
  ...COUNTRY_DATA_WITH_MASKS,
  ...COUNTRY_DATA_WITH_NO_MASKS,
];
