"use strict";function changeSliderPreviews(){switch(sliderPreviews.length=0,currentIndex){case 0:sliderPreviews.push(images[images.length-2]),sliderPreviews.push(images[images.length-1]),sliderPreviews.push(images[currentIndex]),sliderPreviews.push(images[currentIndex+1]),sliderPreviews.push(images[currentIndex+2]);break;case 1:sliderPreviews.push(images[images.length-1]),sliderPreviews.push(images[currentIndex-1]),sliderPreviews.push(images[currentIndex]),sliderPreviews.push(images[currentIndex+1]),sliderPreviews.push(images[currentIndex+2]);break;case images.length-2:sliderPreviews.push(images[currentIndex-2]),sliderPreviews.push(images[currentIndex-1]),sliderPreviews.push(images[currentIndex]),sliderPreviews.push(images[currentIndex+1]),sliderPreviews.push(images[0]);break;case images.length-1:sliderPreviews.push(images[currentIndex-2]),sliderPreviews.push(images[currentIndex-1]),sliderPreviews.push(images[currentIndex]),sliderPreviews.push(images[0]),sliderPreviews.push(images[1]);break;default:sliderPreviews.push(images[currentIndex-2]),sliderPreviews.push(images[currentIndex-1]),sliderPreviews.push(images[currentIndex]),sliderPreviews.push(images[currentIndex+1]),sliderPreviews.push(images[currentIndex+2])}[].slice.call(slider.querySelectorAll(".preview img")).forEach(function(e,r){e.src=sliderPreviews[r].src})}var images=[].slice.call(document.querySelectorAll(".gallery img")),slider=document.querySelector(".slider"),sliderPreviews=[],currentIndex=void 0;images.forEach(function(e,r){e.addEventListener("click",function(){currentIndex=r,slider.style.display="flex",slider.style.top=2*window.pageYOffset+"px",slider.classList.add("active"),document.body.style.overflow="hidden",slider.querySelector(".image-container img").src=e.src.split("-min")[0]+".jpg",changeSliderPreviews()})}),slider.querySelector(".arrow-right").addEventListener("click",function(){currentIndex===images.length-1&&(currentIndex=-1),slider.querySelector(".image-container img").src=images[currentIndex+1].src.split("-min")[0]+".jpg",currentIndex++,changeSliderPreviews()}),document.querySelector(".arrow-left").addEventListener("click",function(){0===currentIndex&&(currentIndex=images.length),slider.querySelector(".image-container img").src=images[currentIndex-1].src.split("-min")[0]+".jpg",currentIndex--,changeSliderPreviews()}),[].slice.call(slider.querySelectorAll(".preview img")).forEach(function(e){e.addEventListener("click",function(){slider.querySelector(".image-container img").src=e.src.split("-min")[0]+".jpg",images.forEach(function(r,i){r.src===e.src&&(currentIndex=i)}),changeSliderPreviews()})}),document.addEventListener("keydown",function(e){slider.classList.contains("active")&&(37===e.keyCode&&(0===currentIndex&&(currentIndex=images.length),slider.querySelector(".image-container img").src=images[currentIndex-1].src.split("-min")[0]+".jpg",currentIndex--,changeSliderPreviews()),39===e.keyCode&&(currentIndex===images.length-1&&(currentIndex=-1),slider.querySelector(".image-container img").src=images[currentIndex+1].src.split("-min")[0]+".jpg",currentIndex++,changeSliderPreviews()))}),slider.querySelector(".row-1").addEventListener("click",function(e){e.target.classList.contains("row-1")&&(slider.style.display="none",document.body.style.overflow="")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjaGFuZ2VTbGlkZXJQcmV2aWV3cyIsInNsaWRlclByZXZpZXdzIiwibGVuZ3RoIiwiY3VycmVudEluZGV4IiwicHVzaCIsImltYWdlcyIsInNsaWNlIiwiY2FsbCIsInNsaWRlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJzcmMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJvdmVyZmxvdyIsInNwbGl0IiwiZSIsImNvbnRhaW5zIiwia2V5Q29kZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6IllBS0EsU0FBU0Esd0JBR1AsT0FGQUMsZUFBZUMsT0FBUyxFQUVoQkMsY0FDTixJQUFLLEdBQ0hGLGVBQWVHLEtBQUtDLE9BQU9BLE9BQU9ILE9BQVMsSUFDM0NELGVBQWVHLEtBQUtDLE9BQU9BLE9BQU9ILE9BQVMsSUFDM0NELGVBQWVHLEtBQUtDLE9BQU9GLGVBQzNCRixlQUFlRyxLQUFLQyxPQUFPRixhQUFlLElBQzFDRixlQUFlRyxLQUFLQyxPQUFPRixhQUFlLEdBQzFDLE1BRUYsS0FBSyxHQUNIRixlQUFlRyxLQUFLQyxPQUFPQSxPQUFPSCxPQUFTLElBQzNDRCxlQUFlRyxLQUFLQyxPQUFPRixhQUFlLElBQzFDRixlQUFlRyxLQUFLQyxPQUFPRixlQUMzQkYsZUFBZUcsS0FBS0MsT0FBT0YsYUFBZSxJQUMxQ0YsZUFBZUcsS0FBS0MsT0FBT0YsYUFBZSxHQUMxQyxNQUVGLEtBQU1FLFFBQU9ILE9BQVMsRUFDcEJELGVBQWVHLEtBQUtDLE9BQU9GLGFBQWUsSUFDMUNGLGVBQWVHLEtBQUtDLE9BQU9GLGFBQWUsSUFDMUNGLGVBQWVHLEtBQUtDLE9BQU9GLGVBQzNCRixlQUFlRyxLQUFLQyxPQUFPRixhQUFlLElBQzFDRixlQUFlRyxLQUFLQyxPQUFPLEdBQzNCLE1BRUYsS0FBTUEsUUFBT0gsT0FBUyxFQUNwQkQsZUFBZUcsS0FBS0MsT0FBT0YsYUFBZSxJQUMxQ0YsZUFBZUcsS0FBS0MsT0FBT0YsYUFBZSxJQUMxQ0YsZUFBZUcsS0FBS0MsT0FBT0YsZUFDM0JGLGVBQWVHLEtBQUtDLE9BQU8sSUFDM0JKLGVBQWVHLEtBQUtDLE9BQU8sR0FDM0IsTUFFRixTQUNFSixlQUFlRyxLQUFLQyxPQUFPRixhQUFlLElBQzFDRixlQUFlRyxLQUFLQyxPQUFPRixhQUFlLElBQzFDRixlQUFlRyxLQUFLQyxPQUFPRixlQUMzQkYsZUFBZUcsS0FBS0MsT0FBT0YsYUFBZSxJQUMxQ0YsZUFBZUcsS0FBS0MsT0FBT0YsYUFBZSxPQUc3Q0csTUFBTUMsS0FBS0MsT0FBT0MsaUJBQWlCLGlCQUFpQkMsUUFBUSxTQUFDQyxFQUFNQyxHQUNsRUQsRUFBS0UsSUFBTVosZUFBZVcsR0FBR0MsTUFsRGpDLEdBQU1SLFdBQVlDLE1BQU1DLEtBQUtPLFNBQVNMLGlCQUFpQixpQkFDakRELE9BQVNNLFNBQVNDLGNBQWMsV0FDaENkLGtCQUNGRSxhQUFBQSxNQW1ESkUsUUFBT0ssUUFBUSxTQUFDTSxFQUFPSixHQUNyQkksRUFBTUMsaUJBQWlCLFFBQVMsV0FDOUJkLGFBQWVTLEVBRWZKLE9BQU9VLE1BQU1DLFFBQVUsT0FDdkJYLE9BQU9VLE1BQU1FLElBQTJCLEVBQXJCQyxPQUFPQyxZQUFrQixLQUM1Q2QsT0FBT2UsVUFBVUMsSUFBSSxVQUVyQlYsU0FBU1csS0FBS1AsTUFBTVEsU0FBVyxTQUMvQmxCLE9BQU9PLGNBQWMsd0JBQXdCRixJQUFNRyxFQUFNSCxJQUFJYyxNQUFNLFFBQVEsR0FBSyxPQUVoRjNCLDJCQUlKUSxPQUFPTyxjQUFjLGdCQUFnQkUsaUJBQWlCLFFBQVMsV0FDekRkLGVBQWlCRSxPQUFPSCxPQUFPLElBQUdDLGNBQWdCLEdBQ3RESyxPQUFPTyxjQUFjLHdCQUF3QkYsSUFBTVIsT0FBT0YsYUFBZSxHQUFHVSxJQUFJYyxNQUFNLFFBQVEsR0FBSyxPQUNuR3hCLGVBRUFILHlCQUdGYyxTQUFTQyxjQUFjLGVBQWVFLGlCQUFpQixRQUFTLFdBQ3pDLElBQWpCZCxlQUFvQkEsYUFBZUUsT0FBT0gsUUFDOUNNLE9BQU9PLGNBQWMsd0JBQXdCRixJQUFNUixPQUFPRixhQUFlLEdBQUdVLElBQUljLE1BQU0sUUFBUSxHQUFLLE9BQ25HeEIsZUFFQUgsNEJBR0NNLE1BQU1DLEtBQUtDLE9BQU9DLGlCQUFpQixpQkFBaUJDLFFBQVEsU0FBQ00sR0FDOURBLEVBQU1DLGlCQUFpQixRQUFTLFdBQzlCVCxPQUFPTyxjQUFjLHdCQUF3QkYsSUFBTUcsRUFBTUgsSUFBSWMsTUFBTSxRQUFRLEdBQUssT0FFaEZ0QixPQUFPSyxRQUFRLFNBQUNDLEVBQU1DLEdBQ2hCRCxFQUFLRSxNQUFRRyxFQUFNSCxNQUFLVixhQUFlUyxLQUc3Q1osMkJBSUpjLFNBQVNHLGlCQUFpQixVQUFXLFNBQUNXLEdBQ2hDcEIsT0FBT2UsVUFBVU0sU0FBUyxZQUNWLEtBQWRELEVBQUVFLFVBQ2lCLElBQWpCM0IsZUFBb0JBLGFBQWVFLE9BQU9ILFFBQzlDTSxPQUFPTyxjQUFjLHdCQUF3QkYsSUFBTVIsT0FBT0YsYUFBZSxHQUFHVSxJQUFJYyxNQUFNLFFBQVEsR0FBSyxPQUNuR3hCLGVBRUFILHdCQUdnQixLQUFkNEIsRUFBRUUsVUFDQTNCLGVBQWlCRSxPQUFPSCxPQUFPLElBQUdDLGNBQWdCLEdBQ3RESyxPQUFPTyxjQUFjLHdCQUF3QkYsSUFBTVIsT0FBT0YsYUFBZSxHQUFHVSxJQUFJYyxNQUFNLFFBQVEsR0FBSyxPQUNuR3hCLGVBRUFILDJCQUtOUSxPQUFPTyxjQUFjLFVBQVVFLGlCQUFpQixRQUFTLFNBQUNXLEdBQ3BEQSxFQUFFRyxPQUFPUixVQUFVTSxTQUFTLFdBQzlCckIsT0FBT1UsTUFBTUMsUUFBVSxPQUN2QkwsU0FBU1csS0FBS1AsTUFBTVEsU0FBVyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeSBpbWcnKSk7XHJcbmNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKTtcclxuY29uc3Qgc2xpZGVyUHJldmlld3MgPSBbXTtcclxubGV0IGN1cnJlbnRJbmRleDtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVNsaWRlclByZXZpZXdzKCkge1xyXG4gIHNsaWRlclByZXZpZXdzLmxlbmd0aCA9IDA7XHJcblxyXG4gIHN3aXRjaCAoY3VycmVudEluZGV4KSB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2ltYWdlcy5sZW5ndGggLSAyXSk7XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2ltYWdlcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2N1cnJlbnRJbmRleF0pO1xyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1tjdXJyZW50SW5kZXggKyAxXSk7XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2N1cnJlbnRJbmRleCArIDJdKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAxOlxyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1tpbWFnZXMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1tjdXJyZW50SW5kZXggLSAxXSk7XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2N1cnJlbnRJbmRleF0pO1xyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1tjdXJyZW50SW5kZXggKyAxXSk7XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2N1cnJlbnRJbmRleCArIDJdKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAoaW1hZ2VzLmxlbmd0aCAtIDIpOlxyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1tjdXJyZW50SW5kZXggLSAyXSk7XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2N1cnJlbnRJbmRleCAtIDFdKTtcclxuICAgICAgc2xpZGVyUHJldmlld3MucHVzaChpbWFnZXNbY3VycmVudEluZGV4XSk7XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2N1cnJlbnRJbmRleCArIDFdKTtcclxuICAgICAgc2xpZGVyUHJldmlld3MucHVzaChpbWFnZXNbMF0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIChpbWFnZXMubGVuZ3RoIC0gMSk6XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2N1cnJlbnRJbmRleCAtIDJdKTtcclxuICAgICAgc2xpZGVyUHJldmlld3MucHVzaChpbWFnZXNbY3VycmVudEluZGV4IC0gMV0pO1xyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1tjdXJyZW50SW5kZXhdKTtcclxuICAgICAgc2xpZGVyUHJldmlld3MucHVzaChpbWFnZXNbMF0pO1xyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1sxXSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHNsaWRlclByZXZpZXdzLnB1c2goaW1hZ2VzW2N1cnJlbnRJbmRleCAtIDJdKTtcclxuICAgICAgc2xpZGVyUHJldmlld3MucHVzaChpbWFnZXNbY3VycmVudEluZGV4IC0gMV0pO1xyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1tjdXJyZW50SW5kZXhdKTtcclxuICAgICAgc2xpZGVyUHJldmlld3MucHVzaChpbWFnZXNbY3VycmVudEluZGV4ICsgMV0pO1xyXG4gICAgICBzbGlkZXJQcmV2aWV3cy5wdXNoKGltYWdlc1tjdXJyZW50SW5kZXggKyAyXSk7XHJcbiAgfVxyXG5cclxuW10uc2xpY2UuY2FsbChzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpZXcgaW1nJykpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgIGl0ZW0uc3JjID0gc2xpZGVyUHJldmlld3NbaV0uc3JjO1xyXG4gIH0pO1xyXG59XHJcblxyXG5pbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGkpID0+IHtcclxuICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGN1cnJlbnRJbmRleCA9IGk7XHJcblxyXG4gICAgc2xpZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBzbGlkZXIuc3R5bGUudG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICogMiArICdweCc7XHJcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1jb250YWluZXIgaW1nJykuc3JjID0gaW1hZ2Uuc3JjLnNwbGl0KCctbWluJylbMF0gKyAnLmpwZyc7XHJcblxyXG4gICAgY2hhbmdlU2xpZGVyUHJldmlld3MoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5zbGlkZXIucXVlcnlTZWxlY3RvcignLmFycm93LXJpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKGN1cnJlbnRJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aC0xKSBjdXJyZW50SW5kZXggPSAtMTtcclxuICBzbGlkZXIucXVlcnlTZWxlY3RvcignLmltYWdlLWNvbnRhaW5lciBpbWcnKS5zcmMgPSBpbWFnZXNbY3VycmVudEluZGV4ICsgMV0uc3JjLnNwbGl0KCctbWluJylbMF0gKyAnLmpwZyc7XHJcbiAgY3VycmVudEluZGV4Kys7XHJcblxyXG4gIGNoYW5nZVNsaWRlclByZXZpZXdzKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoY3VycmVudEluZGV4ID09PSAwKSBjdXJyZW50SW5kZXggPSBpbWFnZXMubGVuZ3RoO1xyXG4gIHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtY29udGFpbmVyIGltZycpLnNyYyA9IGltYWdlc1tjdXJyZW50SW5kZXggLSAxXS5zcmMuc3BsaXQoJy1taW4nKVswXSArICcuanBnJztcclxuICBjdXJyZW50SW5kZXgtLTtcclxuXHJcbiAgY2hhbmdlU2xpZGVyUHJldmlld3MoKTtcclxufSk7XHJcblxyXG5bXS5zbGljZS5jYWxsKHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlldyBpbWcnKSkuZm9yRWFjaCgoaW1hZ2UpID0+IHtcclxuICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtY29udGFpbmVyIGltZycpLnNyYyA9IGltYWdlLnNyYy5zcGxpdCgnLW1pbicpWzBdICsgJy5qcGcnO1xyXG5cclxuICAgIGltYWdlcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLnNyYyA9PT0gaW1hZ2Uuc3JjKSBjdXJyZW50SW5kZXggPSBpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhbmdlU2xpZGVyUHJldmlld3MoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICBpZiAoc2xpZGVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IDApIGN1cnJlbnRJbmRleCA9IGltYWdlcy5sZW5ndGg7XHJcbiAgICAgIHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtY29udGFpbmVyIGltZycpLnNyYyA9IGltYWdlc1tjdXJyZW50SW5kZXggLSAxXS5zcmMuc3BsaXQoJy1taW4nKVswXSArICcuanBnJztcclxuICAgICAgY3VycmVudEluZGV4LS07XHJcblxyXG4gICAgICBjaGFuZ2VTbGlkZXJQcmV2aWV3cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IGltYWdlcy5sZW5ndGgtMSkgY3VycmVudEluZGV4ID0gLTE7XHJcbiAgICAgIHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtY29udGFpbmVyIGltZycpLnNyYyA9IGltYWdlc1tjdXJyZW50SW5kZXggKyAxXS5zcmMuc3BsaXQoJy1taW4nKVswXSArICcuanBnJztcclxuICAgICAgY3VycmVudEluZGV4Kys7XHJcblxyXG4gICAgICBjaGFuZ2VTbGlkZXJQcmV2aWV3cygpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5zbGlkZXIucXVlcnlTZWxlY3RvcignLnJvdy0xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy0xJykpIHtcclxuICAgIHNsaWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==
