import { parseBooleans, parseNumbers } from 'xml2js/lib/processors';
import { renameTags } from './camt052-utils';
import { parseStringToXml } from './xml-parser';

export class Camt052 {
  document: Camt052Document | null = null;

  public async parseCamt(xml: string): Promise<Camt052> {
    const xmlDocument = await parseStringToXml<Camt052DocumentRoot>(xml, {
      charkey: 'value',
      attrkey: 'attributes',
      tagNameProcessors: [renameTags],
      attrNameProcessors: [renameTags],
      valueProcessors: [parseNumbers, parseBooleans],
      preserveChildrenOrder: true,
      explicitArray: false,
    });
    this.document = xmlDocument.Document;
    return this;
  }
}

interface Camt052DocumentRoot {
  Document: Camt052Document;
}
export interface Camt052Document {
  attributes: { xmlns: string };
  messageRoot: MessageRoot;
}

export interface MessageRoot {
  groupHeader: GroupHeader;
  report: Report;
}

export interface GroupHeader {
  messageIdentification: string;
  creationDateTime: string;
}

export interface Report {
  identification: string;
  reportPagination: ReportPagination;
  creationDateTime: string;
  account: Account;
  balance: Balance[];
  entry: Entry[];
}

export interface Account {
  identification: AccountIdentification;
  currency: Currency;
  service: Service;
}

export enum Currency {
  Eur = 'EUR',
}

export interface AccountIdentification {
  IBAN: string;
}

export interface Service {
  financialInstitutionIdentification: ServiceFinancialInstitutionIdentification;
}

export interface ServiceFinancialInstitutionIdentification {
  BICFI: string;
  name: string;
  other: FinancialInstitutionIdentificationOther;
}

export interface FinancialInstitutionIdentificationOther {
  identification: string;
  issuer: string;
}

export interface Balance {
  type: Type;
  amount: Amount;
  creditDebitIndicator: string;
  date: DateClass;
}

export interface Amount {
  value: number;
  attributes: Attributes;
}

export interface Attributes {
  currency: Currency;
}

export interface DateClass {
  date: string;
}

export interface Type {
  codeOrProprietary: Status;
}

export interface Status {
  code: string;
}

export interface Entry {
  amount: Amount;
  creditDebitIndicator: string;
  status: Status;
  bookingDate: DateClass;
  valueDate: DateClass;
  accountServicerReference: string;
  bankTransactionCode: string;
  entryDetails: EntryDetails;
  additionalEntryInformation: string;
}

export interface EntryDetails {
  transactionDetails: TransactionDetails;
}

export interface TransactionDetails {
  references: References;
  amount: Amount;
  bankTransactionCode: BankTransactionCode;
  relatedParties: RelatedParties;
  relatedAgents: RelatedAgents;
  remittanceInformation: RemittanceInformation;
  purpose?: Status;
}

export interface BankTransactionCode {
  domain: Domain;
  proprietary: BankTransactionCodeProprietary;
}

export interface Domain {
  code: string;
  family: Family;
}

export interface Family {
  code: string;
  subFamilyCode: string;
}

export interface BankTransactionCodeProprietary {
  code: string;
  issuer: string;
}

export interface References {
  endToEndIdentification: number | string;
  mandateIdentification?: string;
  proprietary: ReferencesProprietary;
}

export interface ReferencesProprietary {
  type: string;
  reference: string;
}

export interface RelatedAgents {
  debtorAgent: TorAgent;
  creditorAgent: TorAgent;
}

export interface TorAgent {
  financialInstitutionIdentification: CreditorAgentFinancialInstitutionIdentification;
}

export interface CreditorAgentFinancialInstitutionIdentification {
  BICFI: string;
}

export interface RelatedParties {
  debtor: Tor;
  debtorAccount: TorAccount;
  creditor: Creditor;
  creditorAccount: TorAccount;
  ultimateCreditor?: Tor;
}

export interface Creditor {
  party: CreditorParty;
}

export interface CreditorParty {
  name: string;
  identification?: PartyIdentification;
}

export interface PartyIdentification {
  privateIdentification: PrivateIdentification;
}

export interface PrivateIdentification {
  other: PrivateIdentificationOther;
}

export interface PrivateIdentificationOther {
  identification: string;
}

export interface TorAccount {
  identification: AccountIdentification;
}

export interface Tor {
  party: DebtorParty;
}

export interface DebtorParty {
  name: string;
}

export interface RemittanceInformation {
  unstructured: string;
}

export interface ReportPagination {
  pageNumber: number;
  lastPageIndicator: boolean;
}
