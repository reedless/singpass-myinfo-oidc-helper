import * as moment from "moment";
import { myInfoDomain } from "../../domain";

export const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

export const preschoolEligibleChild_IC = {
	birthcertno: { value: "T7080568A" },
	name: { value: "Ezra Lee" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N2 = {
	birthcertno: { value: "T8196310F" },
	name: { value: "Elliot Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_PG = {
	birthcertno: { value: "T0102344B" },
	name: { value: "Ella Lee" },
	dob: { value: formatDateToString(moment().subtract(18, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N1 = {
	birthcertno: { value: "T9812173G" },
	name: { value: "Ellie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K1 = {
	birthcertno: { value: "T7655778G" },
	name: { value: "Emma Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K2 = {
	birthcertno: { value: "T2682583G" },
	name: { value: "Kelly Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N1 = {
	birthcertno: { value: "T2100212C" },
	name: { value: "Kylie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_IC = {
	birthcertno: { value: "T3171925E" },
	name: { value: "Karol Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K1 = {
	birthcertno: { value: "T1430340A" },
	name: { value: "Kara Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N2 = {
	birthcertno: { value: "T1580401C" },
	name: { value: "Sara Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_PG = {
	birthcertno: { value: "T6343209H" },
	name: { value: "Stella Lee" },
	dob: { value: formatDateToString(moment().subtract(22, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K2 = {
	birthcertno: { value: "T4336664A" },
	name: { value: "Sonia Lee" },
	dob: { value: formatDateToString(moment().subtract(9, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


export const preschoolIneligibleChild1 = {
	birthcertno: { value: "T4236033Z" },
	name: { value: "Emmy Lee" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolIneligibleChild2 = {
	birthcertno: { value: "T5207292H" },
	name: { value: "Emmanuel Lee" },
	dob: { value: formatDateToString(moment().subtract(7, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


const childYoungest = {
	birthcertno: { value: "T7403149D" },
	name: { value: "Youngest Tan Ke Xuan" },
	dob: { value: formatDateToString() },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	birthcertno: { value: "T3497606B" },
	name: { value: "1 Month Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child2MonthsOld = {
	birthcertno: { value: "T3497606B" },
	name: { value: "2 Months Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle1 = {
	birthcertno: { value: "T6482839D" },
	name: { value: "Middle Tan Twin1" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle2 = {
	birthcertno: { value: "T0561004J" },
	name: { value: "Middle Tan Twin2" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle3 = {
	birthcertno: { value: "T9682932E" },
	name: { value: "Tan Boy" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


const childMiddle4 = {
	birthcertno: { value: "T2089445D" },
	name: { value: "Tan Girl" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle5 = {
	birthcertno: { value: "T1415220I" },
	name: { value: "Tan Girl Younger" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childSuperOld = {
	birthcertno: { value: "T1985685I" },
	name: { value: "Super Old Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child6YearsOld = {
	birthcertno: { value: "T8158347H" },
	name: { value: "Turning 6 Tan Kid born Jan 1st" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child7YearsOld = {
	birthcertno: { value: "T1012559B" },
	name: { value: "Turning 7 Tan Kid born Dec 31" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childDeceased1 = {
	birthcertno: { value: "T1836838I" },
	name: { value: "Deceased child 1" },
	dob: { value: formatDateToString(moment().subtract(4, "years").endOf("year")) },
	lifestatus: { code: "D", desc: "DECEASED" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childDeceased2 = {
	birthcertno: { value: "T7888002Z" },
	name: { value: "Deceased child 2" },
	dob: { value: formatDateToString(moment().subtract(5, "years").endOf("year")) },
	lifestatus: { code: "D", desc: "DECEASED" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const ChildrenRecords = {
	childYoungest,
	child1MonthOld,
	child2MonthsOld,
	childMiddle1,
	childMiddle2,
	childMiddle3,
	childMiddle4,
	childMiddle5,
	childSuperOld,
	child6YearsOld,
	child7YearsOld,
	childDeceased1,
	childDeceased2,
};
