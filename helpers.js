import { PAGE_OPTIONS as pageOptions } from "./constants.js";

export const newPage = (doc) => {
    doc.addPage(pageOptions);
}

export const newLine = (doc) => {
    doc.moveDown()
};

export const addPageNumbers = (doc) => doc.on('pageAdded', function () {
    doc.font(cg)
    doc.fontSize(normal)
    doc.fillColor(black)

    const pageNum = (doc.bufferedPageRange().start + doc.bufferedPageRange().count)
    doc.text(pageNum, doc.page.width - opts.page.margin.right, doc.page.height - opts.page.margin.top + (opts.page.margin.top / 2))

    doc.lineWidth(3)

    doc.moveTo(opts.page.margin.left, doc.page.height - opts.page.margin.top).lineTo(opts.page.margin.left + writablewidth, doc.page.height - opts.page.margin.top).stroke('#dedede')
});