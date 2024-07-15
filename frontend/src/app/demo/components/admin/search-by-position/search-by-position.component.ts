import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CvService } from '../../../service/cv.service';

interface CvData {
    cvName: string;
    computerSkills: Skill[];
    softSkills: Skill[];
    languageSkills: LanguageSkill[];
    otherSkills: Skill[];
}

interface Skill {
    foundIn: string;
    last_used: string;
    level: string;
    skill: string;
    skillCode: string;
    skillDescription: string;
    years: string;
}

interface LanguageSkill {
    foundIn: string;
    last_used: string;
    levelCode: string;
    levelDescription: string;
    skillCode: string;
    skillDescription: string;
    years: string;
}
@Component({
    selector: 'app-search-by-position',
    templateUrl: './search-by-position.component.html',
    styleUrl: './search-by-position.component.scss'
})
export class SearchByPositionComponent {

    cvDataList: { key: string, value: CvData }[] = [];
    pagedCvDataList: { key: string, value: CvData }[] = [];
    filteredCvDataList: { key: string, value: CvData }[] = [];
    searchQuery: string = '';
    pageSize: number = 5;
    pageIndex: number = 0;

    cols = [
        { field: 'cvName', header: 'CV Name' },
        { field: 'computerSkills', header: 'Computer Skills' },
        { field: 'softSkills', header: 'Soft Skills' },
        { field: 'languageSkills', header: 'Language Skills' },
        { field: 'otherSkills', header: 'Other Skills' }
    ];
    keywords: string = ""

    constructor(private cvService: CvService) { }


    fetchCvData(): void {
        this.cvService.searchByPosition(this.keywords).pipe(
            map(data => {
                console.log('original data is :', data);
                return Object.keys(data).map(key => ({ key, value: data[key] }));
            })
        ).subscribe(
            (transformedData: { key: string, value: CvData }[]) => {
                console.log('transformed data is :', transformedData);
                this.cvDataList = transformedData;
                this.updatePagedData();
            },
            error => {
                console.error('Error fetching CV data: ', error);
            }
        );
    }

    applyFilter(filterValue: string, category: string): void {
        this.searchQuery = filterValue.trim().toLowerCase();

        if (category === 'softSkills') {
            this.filteredCvDataList = this.cvDataList.filter(cvData =>
                cvData.value.softSkills.some(skill => skill.skillDescription.toLowerCase().includes(this.searchQuery))
            );
        } else if (category === 'otherSkills') {
            this.filteredCvDataList = this.cvDataList.filter(cvData =>
                cvData.value.otherSkills.some(skill => skill.skill.toLowerCase().includes(this.searchQuery))
            );
        } else {
            this.filteredCvDataList = [...this.cvDataList];
        }
        this.updatePagedData();
    }

    onPageChange(event: any) {
        this.pageIndex = event.page;
        this.pageSize = event.rows;
        this.updatePagedData();
    }

    updatePagedData() {
        const startIndex = this.pageIndex * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.pagedCvDataList = this.cvDataList.slice(startIndex, endIndex);
    }


    getcolor() {
        const color = 'color' + Math.floor(Math.random() * 6);
        return color
    }


}

