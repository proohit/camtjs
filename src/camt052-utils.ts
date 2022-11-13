const ATTRIBUTE_MAPPING = {
  BkToCstmrAcctRpt: 'messageRoot',
  GrpHdr: 'groupHeader',
  Rpt: 'report',
  Id: 'identification',
  RptPgntn: 'reportPagination',
  PgNb: 'pageNumber',
  LastPgInd: 'lastPageIndicator',
  ElctrncSeqNb: 'electronicSequenceNumber',
  RptgSeq: 'reportingSequence',
  LglSeqNb: 'legalSequenceNumber',
  CreDtTm: 'creationDateTime',
  FrToDt: 'fromToDateTime',
  CpyDplctInd: 'copyDuplicateIndicator',
  RptgSrc: 'reportingSource',
  Acct: 'account',
  Tp: 'type',
  Ccy: 'currency',
  Nm: 'name',
  Prxy: 'proxy',
  Ownr: 'owner',
  Svcr: 'service',
  RltdAcct: 'relatedAccount',
  Intrst: 'interest',
  Cd: 'code',
  Prtry: 'proprietary',
  Rate: 'rate',
  VldtyRg: 'validityRange',
  Amt: 'amount',
  FrAmt: 'fromAmount',
  ToAmt: 'toAmount',
  FrToAmt: 'fromToAmount',
  EQAmt: 'equalAmount',
  NEQAmt: 'notEqualAmount',
  CdtDbtInd: 'creditDebitIndicator',
  Rsn: 'reason',
  Tax: 'tax',
  Bal: 'balance',
  CdtLine: 'creditLine',
  Dt: 'date',
  Avlbty: 'availability',
  TxsSummry: 'transactionsSummary',
  Ntry: 'entry',
  NtryRef: 'entryReference',
  RvslInd: 'reversalIndicator',
  Sts: 'status',
  BookgDt: 'bookingDate',
  ValDt: 'valueDate',
  AcctSvcrRef: 'accountServicerReference',
  BkTxCd: 'bankTransactionCode',
  ComssnWvrInd: 'commissionWaiverIndicator',
  AddtlnlInfInd: 'additionalInformationIndicator',
  MsgNmId: 'messageNameIdentification',
  MsgId: 'messageIdentification',
  AmtDtls: 'amountDetails',
  Chrgs: 'charges',
  TechInptChanl: 'technicalInputChannel',
  CardTx: 'cardTransaction',
  Card: 'card',
  PlainCardData: 'plainCardData',
  PAN: 'pan',
  CardSeqNb: 'cardSequenceNumber',
  FctvDt: 'effectiveDate',
  XpryDt: 'expiryDate',
  TrckData: 'trackData',
  TrckNb: 'trackNumber',
  TrckVal: 'trackValue',
  CardSctyCd: 'cardSecurityCode',
  CSCMgmt: 'cscManagement',
  CSCVal: 'cscValue',
  CardCtryCd: 'cardCountryCode',
  CardBrnd: 'cardBrand',
  AddtlCardData: 'additionalCardData',
  POI: 'poi',
  SysNm: 'systemName',
  GrpId: 'groupIdentification',
  Cpblties: 'capabilities',
  CardRdngCpblties: 'cardReadingCapabilities',
  CrdhldrVrfctnCpblties: 'cardholderVerificationCapabilities',
  OnLineCpblties: 'onLineCapabilities',
  DispCpblties: 'displayCapabilities',
  DispTp: 'displayType',
  NbOfLines: 'numberOfLines',
  LineWidth: 'lineWidth',
  PrtLineWidth: 'printLineWidth',
  Cmpnt: 'component',
  POICmpntTp: 'poiComponentType',
  ManfctrId: 'manufacturerIdentification',
  Mdl: 'model',
  VrsnNb: 'versionNumber',
  SrlNb: 'serialNumber',
  ApprvlNb: 'approvalNumber',
  AggtdNtry: 'aggregatedEntry',
  AddtlSvc: 'additionalService',
  TxCtgy: 'transactionCategory',
  SaleRcncltnId: 'saleReconciliationIdentification',
  SeqNbRg: 'sequenceNumberRange',
  FrstTx: 'firstTransaction',
  LastTx: 'lastTransaction',
  TxDtRg: 'transactionDateRange',
  PrePdAcct: 'prePaidAccount',
  NtryDtls: 'entryDetails',
  Btch: 'batch',
  PmtInfId: 'paymentInformationIdentification',
  NbOfTxs: 'numberOfTransactions',
  TtlAmt: 'totalAmount',
  TxDtls: 'transactionDetails',
  Refs: 'references',
  InstrId: 'instructionIdentification',
  EndToEndId: 'endToEndIdentification',
  UETR: 'uetr',
  TxId: 'transactionIdentification',
  MndtId: 'mandateIdentification',
  ChqNb: 'chequeNumber',
  ClrSysRef: 'clearingSystemReference',
  AcctOwnrTxId: 'accountOwnerTransactionIdentification',
  AcctSvcrTxId: 'accountServicerTransactionIdentification',
  MktInfrstrctrTxId: 'marketInfrastructureTransactionIdentification',
  PrcgId: 'processingIdentification',
  Ref: 'reference',
  RltdPties: 'relatedParties',
  InitgPty: 'initiatingParty',
  Dbtr: 'debtor',
  DbtrAcct: 'debtorAccount',
  UltmtDbtr: 'ultimateDebtor',
  Cdtr: 'creditor',
  CdtrAcct: 'creditorAccount',
  UltmtCdtr: 'ultimateCreditor',
  TradgPty: 'tradingParty',
  RltdAgts: 'relatedAgents',
  InstgAgt: 'instructingAgent',
  InstdAgt: 'instructedAgent',
  DbtrAgt: 'debtorAgent',
  CdtrAgt: 'creditorAgent',
  IntrmyAgt1: 'intermediaryAgent1',
  IntrmyAgt2: 'intermediaryAgent2',
  IntrmyAgt3: 'intermediaryAgent3',
  RcvgAgt: 'receivingAgent',
  DlvrgAgt: 'deliveringAgent',
  IssgAgt: 'issuingAgent',
  SttlmPlc: 'settlementPlace',
  Agt: 'agent',
  LclInstrm: 'localInstrument',
  PmtTpInf: 'paymentTypeInformation',
  Purp: 'purpose',
  RltdRmtInf: 'relatedRemittanceInformation',
  RmtInf: 'remittanceInformation',
  Ustrd: 'unstructured',
  Strd: 'structured',
  RfrdDocInf: 'referredDocumentInformation',
  CdOrPrtry: 'codeOrProprietary',
  Issr: 'issuer',
  Nb: 'number',
  RltdDt: 'relatedDate',
  LineDtls: 'lineDetails',
  Desc: 'description',
  DuePyblAmt: 'duePayableAmount',
  DscntApldAmt: 'discountAppliedAmount',
  CdtNoteAmt: 'creditNoteAmount',
  TaxAmt: 'taxAmount',
  AdjstmntAmtAndRsn: 'adjustmentAmountAndReason',
  AddtlInf: 'additionalInformation',
  RmtdAmt: 'remittedAmount',
  RfrdDocAmt: 'referredDocumentAmount',
  CdtrRefInf: 'creditorReferenceInformation',
  Invcr: 'invoicer',
  Invcee: 'invoicee',
  TaxRmt: 'taxRemittance',
  AdmstnZone: 'administrationZone',
  RefNb: 'referenceNumber',
  Mtd: 'method',
  TtlTaxblBaseAmt: 'totalTaxableBaseAmount',
  TtlTaxAmt: 'totalTaxAmount',
  SeqNb: 'sequenceNumber',
  Rcrd: 'record',
  Ctgy: 'category',
  CtgyDtls: 'categoryDetails',
  DbtrSts: 'debtorStatus',
  CertId: 'certificateIdentification',
  FrmsCd: 'formsCode',
  Prd: 'period',
  Yr: 'year',
  TaxblBaseAmt: 'taxableBaseAmount',
  Dtls: 'details',
  GrnshmtRmt: 'garnishmentRemittance',
  AddtlRmtInf: 'additionalRemittanceInformation',
  RltdDts: 'relatedDates',
  AccptncDtTm: 'acceptanceDateTime',
  TradActvtyCtrctlSttlmDt: 'tradeActivityContractualSettlementDate',
  TradDt: 'tradeDate',
  IntrBkSttlmDt: 'interbankSettlementDate',
  StartDt: 'startDate',
  EndDt: 'endDate',
  TxDtTm: 'transactionDateTime',
  RltdPrice: 'relatedPrice',
  DealPrice: 'dealPrice',
  RltdQties: 'relatedQuantities',
  Qty: 'quantity',
  OrgnlAndCurFaceAmt: 'originalAndCurrentFaceAmount',
  FinInstrmId: 'financialInstrumentIdentification',
  RtrInf: 'returnInformation',
  CorpActn: 'corporateAction',
  EvtTp: 'eventType',
  EvtId: 'eventIdentification',
  SfkpgAcct: 'safekeepingAccount',
  CshDpst: 'cashDeposit',
  Tx: 'transaction',
  Aggtd: 'aggregated',
  Indv: 'individual',
  ICCRltdData: 'iccRelatedData',
  PmtCntxt: 'paymentContext',
  CardPres: 'cardPresent',
  CrdhldrPres: 'cardholderPresent',
  OnLineCntxt: 'onLineContext',
  AttndncCntxt: 'attendanceContext',
  TxEnvt: 'transactionEnvironment',
  TxChanl: 'transactionChannel',
  AttndntMsgCpbl: 'attendantMessageCapable',
  AttndntLang: 'attendantLanguage',
  CardDataNtryMd: 'cardDataEntryMode',
  FllbckInd: 'fallbackIndicator',
  AuthntcnMtd: 'authenticationMethod',
  AuthntcnNtty: 'authenticationEntity',
  SaleRefNb: 'saleReferenceNumber',
  RePresntmntRsn: 'rePresentmentReason',
  Pdct: 'product',
  PdctCd: 'productCode',
  UnitOfMeasr: 'unitOfMeasure',
  PdctQty: 'productQuantity',
  UnitPric: 'unitPrice',
  PdctAmt: 'productAmount',
  TaxTp: 'taxType',
  AddtlPdctInf: 'additionalProductInformation',
  VldtnDt: 'validationDate',
  VldtnSeqNb: 'validationSequenceNumber',
  AddtlTxInf: 'additionalTransactionInformation',
  SplmtryData: 'supplementaryData',
  AddtlNtryInf: 'additionalEntryInformation',
  AddtlRptInf: 'additionalReportInformation',
  Pty: 'party',
  PrvtId: 'privateIdentification',
  Fmly: 'family',
  Domn: 'domain',
  SubFmlyCd: 'subFamilyCode',
  Othr: 'other',
  FinInstnId: 'financialInstitutionIdentification',
};

export const renameTags = (name: string) => {
  return ATTRIBUTE_MAPPING[name as keyof typeof ATTRIBUTE_MAPPING] || name;
};
