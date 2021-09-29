import { SyncEvent } from 'ts-events';
import { IContentData, IMapScrollerContent, ParsedInterpolationStop } from 'map-scroller';
export interface IEditorContent<DataT extends IContentData = IContentData> extends IMapScrollerContent {
    setDestination?(time: number): void;
    getLabel?(): string | undefined;
    getData(): DataT | undefined;
    getType(): string | undefined;
    getInterpolators(): Record<string, IInterpolator<unknown>>;
}
export interface IInterpolator<T> {
    getStops(): ParsedInterpolationStop<T>[];
}
export declare class Editor<ContentT extends IEditorContent = IEditorContent> {
    seek: SyncEvent<number>;
    private _container;
    private _textarea;
    private _timelineEl;
    private _outlineEl;
    private _outlineItemsEl;
    private _outlineHeaderEl;
    private _outlineScrollEl;
    private _errorMsg;
    private _updateButtonHandler?;
    private _expandedRows;
    private _timelineModel;
    private _contents;
    private _timeline;
    private _vm;
    private _dirty;
    constructor(container: HTMLDivElement);
    addContent(content: ContentT): void;
    removeContent(content: ContentT): void;
    setTime(currentTime: number): void;
    reset(): void;
    private _redrawLoop;
    private _redrawTimeline;
    private _redrawOutline;
    private _rowFromContent;
    private _rowFromProperty;
    private _initTimeline;
    private _onKeyPress;
    private _onDragFinished;
    private _onDrag;
    private _onMouseDown;
    private _onScroll;
    private _onTimeChanged;
    private _onOutlineMouseWheel;
    private _onContentsChanged;
    private _onEmptyClick;
    private _onModuleClicked;
    private _onPropertyKeyframeClicked;
    private _updateHandler;
    private _onJsonChanged;
    private _onResizeEnd;
    private _processDragElement;
    private _absoluteToRelative;
    private _toggleGroup;
    private _isModuleRow;
    private _isPropertyRow;
    private _getInterpolationStop;
    private _updatePropertyKeyframePosition;
    private _removeKeyframe;
    private _addKeyframe;
    private _editContentData;
    private _editKeyframeData;
    private _updateModuleKeyframePosition;
    private _getContent;
    private _updateModuleData;
    private _updateKeyframeData;
    private _expandTimeline;
}